import { Fragment } from "react";
import { Container } from "@/components/ui";
import type { LegalBlock, LegalDocument } from "@/lib/legal/types";

/**
 * Renders a legal document.
 *
 * Deliberately not built from the marketing components. Those cap body copy at
 * 62ch against a 90rem container and space sections 112px apart, which suits a
 * landing page and makes a thirty-clause document exhausting. This runs a
 * single narrow column, tighter vertical rhythm, and puts the clause number in
 * the margin so the structure is scannable.
 *
 * Every clause gets an id derived from its printed number, so a reference to
 * "Section 9.4" can be linked to directly.
 */

/** "3.2" -> "section-3-2", usable as a URL fragment. */
export const clauseId = (number: string) => `section-${number.replace(/\./g, "-")}`;

const EMAIL = /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/gi;

/**
 * The documents name several mailboxes in running text. Making them mailto
 * links is the one presentational liberty taken here: it adds no words and
 * removes none.
 */
function withEmailLinks(text: string) {
  // split() with a capturing group puts every match at an odd index, which is
  // the test. Calling EMAIL.test() here would be a bug: a /g regex carries
  // lastIndex between calls and returns alternating answers for the same input.
  const parts = text.split(EMAIL);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <a
        key={index}
        href={`mailto:${part}`}
        className="text-iliac-blue underline underline-offset-2 hover:text-iliac-black"
      >
        {part}
      </a>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.kind === "subheading") {
    return (
      <p className="mt-6 font-jakarta text-body font-semibold text-near-black">
        {block.text}
      </p>
    );
  }

  if (block.kind === "bullets") {
    return (
      <ul className="mt-4 space-y-3">
        {block.items.map((item) => (
          <li
            key={item}
            className="relative pl-6 text-body leading-relaxed text-near-black/80 before:absolute before:left-0 before:top-[0.7em] before:size-[5px] before:rounded-full before:bg-iliac-blue/60"
          >
            {withEmailLinks(item)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className="mt-4 text-body leading-relaxed text-near-black/80">
      {withEmailLinks(block.text)}
    </p>
  );
}

export function LegalDocumentView({ doc }: { doc: LegalDocument }) {
  return (
    <section className="bg-off-white py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-[72ch]">
          {/* Both source documents leave these blank. Saying so is more honest
              than omitting the line and letting the page imply a current date. */}
          <dl className="flex flex-wrap gap-x-10 gap-y-2 border-b border-iliac-black/10 pb-8">
            <div>
              <dt className="eyebrow text-near-black/65">Effective date</dt>
              <dd className="mt-2 text-body text-near-black/80">
                {doc.effectiveDate ?? "Not yet set"}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-near-black/65">Last updated</dt>
              <dd className="mt-2 text-body text-near-black/80">
                {doc.lastUpdated ?? "Not yet set"}
              </dd>
            </div>
          </dl>

          {doc.preamble && (
            <div className="mt-10">
              {doc.preamble.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </div>
          )}

          <div className="mt-4">
            {doc.sections.map((section) => (
              <section
                key={section.number}
                id={clauseId(section.number)}
                className="scroll-mt-24 pt-10"
              >
                <h2 className="flex items-baseline gap-3 font-jakarta text-h3 font-semibold text-near-black">
                  <span className="shrink-0 tabular-nums text-iliac-blue">
                    {section.number}
                  </span>
                  {section.heading && <span>{section.heading}</span>}
                </h2>
                {section.blocks.map((block, index) => (
                  <Block key={index} block={block} />
                ))}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
