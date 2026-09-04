/* eslint-disable @next/next/no-img-element -- Satori has no next/image;
   an ImageResponse renders raw <img> and nothing else. */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

/**
 * The card every link to this site renders as, in WhatsApp, LinkedIn, Slack
 * and X. It is the lockup that sits at the top of every page: the mark, the
 * wordmark and the approved tagline, on ILIAC Black.
 *
 * Drawn at build time by Satori, which reads only ttf, otf and woff, so the
 * brand face is bundled in assets/fonts rather than taken from next/font.
 * Satori supports flexbox and a subset of CSS, no grid, so the layout is
 * deliberately plainer than the site's.
 */
export const alt = `${site.name}. ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read once at module scope: none of it depends on the request.
const [extraBold, medium, markSvg] = await Promise.all([
  readFile(join(process.cwd(), "assets/fonts/PlusJakartaSans-ExtraBold.woff")),
  readFile(join(process.cwd(), "assets/fonts/PlusJakartaSans-Medium.woff")),
  readFile(join(process.cwd(), "public/iliac-mark.svg")),
]);

// The same file the site renders, inlined so the gradient survives.
const mark = `data:image/svg+xml;base64,${markSvg.toString("base64")}`;

/**
 * Satori does not apply a font's kerning pairs, and Plus Jakarta Sans leans on
 * them hard for punctuation: at display size "Future ," opens a gap about a
 * fifth of an em wide. It grows with weight, so it is worst in the ExtraBold
 * headline and invisible in the Medium footer. Browsers kern properly, which
 * is why this only shows up on the card. Pulling each mark back by hand is the
 * only lever Satori gives us.
 */
const KERN_EM = -0.13;

function Kerned({ text, fontSize }: { text: string; fontSize: number }) {
  // Capturing split keeps the punctuation as its own run.
  const runs = text.split(/([,.])/).filter(Boolean);
  return (
    <div style={{ display: "flex" }}>
      {runs.map((run, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            // pre keeps the space that leads each run after a mark.
            whiteSpace: "pre",
            marginLeft: /^[,.]$/.test(run) ? fontSize * KERN_EM : 0,
          }}
        >
          {run}
        </div>
      ))}
    </div>
  );
}

export default function OpengraphImage() {
  const headline = 86;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0a1628",
          padding: "76px 80px",
          fontFamily: "Plus Jakarta Sans",
          color: "#ffffff",
        }}
      >
        {/* The watermark the dark sections of the site use, kept faint enough
            to survive the heavy compression these cards get put through. */}
        <img
          src={mark}
          width={620}
          height={654}
          alt=""
          style={{ position: "absolute", top: -110, right: -180, opacity: 0.07 }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <img src={mark} width={62} height={65} alt="" />
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "0.22em",
            }}
          >
            ILIAC
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: headline,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
            }}
          >
            <Kerned text={site.tagline} fontSize={headline} />
          </div>
          <div
            style={{
              width: 132,
              height: 7,
              marginTop: 34,
              backgroundColor: "#0ec8d4",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 25,
            fontWeight: 500,
            color: "rgba(255,255,255,0.66)",
          }}
        >
          <div style={{ display: "flex" }}>{site.spine}</div>
          <div style={{ display: "flex" }}>{site.location}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Plus Jakarta Sans", data: extraBold, weight: 800, style: "normal" },
        { name: "Plus Jakarta Sans", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
