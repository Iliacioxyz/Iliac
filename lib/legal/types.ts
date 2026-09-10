/**
 * Shape of a legal document.
 *
 * The two documents are transcribed from the supplied PDFs and are reproduced
 * as written. No headings have been invented for the numbered sections: the
 * source documents number their clauses without titling most of them, and
 * inventing titles would put words into a document that is operative. Where
 * the source does give a heading, it is carried over.
 *
 * Section numbers are stored as strings and printed as given, including where
 * the source numbering is out of order. Cross-references inside the text point
 * at those printed numbers, so renumbering here would break them further.
 */

/** A paragraph, a bulleted list, or a lead-in that introduces the list after it. */
export type LegalBlock =
  | { kind: "text"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "subheading"; text: string };

export type LegalSection = {
  /** As printed in the source, e.g. "3.2", "10.1", "21". */
  number: string;
  /** Only where the source gives one. */
  heading?: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  /** Sits above the numbered clauses. */
  preamble?: LegalBlock[];
  sections: LegalSection[];
  /** Blank in both source PDFs. Rendered as an explicit gap rather than hidden. */
  effectiveDate: string | null;
  lastUpdated: string | null;
};

/** Shorthand so the document files stay readable. */
export const p = (text: string): LegalBlock => ({ kind: "text", text });
export const ul = (...items: string[]): LegalBlock => ({ kind: "bullets", items });
export const sub = (text: string): LegalBlock => ({ kind: "subheading", text });
