/**
 * Renders a JSON-LD structured data block. `data` should come from one of
 * the builders in lib/schema.ts, which only encode real, visible content.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
