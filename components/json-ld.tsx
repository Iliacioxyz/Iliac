/**
 * Renders one structured-data block.
 *
 * A "</script>" appearing anywhere in the data would close the tag early, so
 * every "<" goes out as its JSON escape. It parses back to the same string.
 */
export function JsonLd({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replaceAll("<", "\\u003c"),
      }}
    />
  );
}
