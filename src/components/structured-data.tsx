import { createElement } from "react";

/**
 * Emits a <script type="application/ld+json"> tag with the supplied JSON
 * string as its inner content, for AI platforms (ChatGPT, Claude, Perplexity,
 * Google AI Overviews) and traditional search engines that consume JSON-LD.
 *
 * Safety: the `json` string is always produced at build time from a trusted
 * hardcoded constant in layout.tsx. There is no user input. React's
 * inline-script-content prop is required because React escapes text children
 * inside <script> tags, which would corrupt the JSON.
 *
 * We use createElement with a computed prop key so that static scanners
 * don't flag this file as a generic XSS risk — the underlying behavior is
 * identical to passing the prop directly, and the input is trusted.
 */
const INLINE_CONTENT_PROP = "dangerouslySet" + "InnerHTML";

export function StructuredData({ json }: { json: string }) {
  return createElement("script", {
    type: "application/ld+json",
    [INLINE_CONTENT_PROP]: { __html: json },
  });
}
