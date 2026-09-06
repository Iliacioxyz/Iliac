/* eslint-disable @next/next/no-img-element -- Satori has no next/image;
   an ImageResponse renders raw <img> and nothing else. */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * A raster of the mark, served at /logo.png.
 *
 * The Organization schema needs a logo, and consumers vary in whether they
 * accept SVG. Rasterising from public/iliac-mark.svg at build time sidesteps
 * the question without committing a second copy of the artwork: replace the
 * trace with the master file and this follows.
 *
 * Square with padding, on transparent, which is what logo consumers expect.
 */
export const dynamic = "force-static";

const markSvg = await readFile(join(process.cwd(), "public/iliac-mark.svg"));
const mark = `data:image/svg+xml;base64,${markSvg.toString("base64")}`;

const SIZE = 512;
// The mark's viewBox is 36x38, so it is slightly taller than it is wide.
const MARK_HEIGHT = 400;
const MARK_WIDTH = Math.round((MARK_HEIGHT * 36) / 38);

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={mark} width={MARK_WIDTH} height={MARK_HEIGHT} alt="" />
      </div>
    ),
    { width: SIZE, height: SIZE },
  );
}
