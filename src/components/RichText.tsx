import { Fragment } from "react";
import type { ReactNode } from "react";

const STRONG_PATTERN = /<strong>([\s\S]*?)<\/strong>/g;

/**
 * Renderiza textos de tradução que marcam trechos com `<strong>`,
 * sem recorrer a `dangerouslySetInnerHTML`.
 */
export function RichText({
  text,
  strongClassName = "bg-linear-to-r from-[#53e2e2] to-[#319b9b] bg-clip-text font-bold text-transparent",
}: {
  text: string;
  strongClassName?: string;
}) {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(STRONG_PATTERN)) {
    const start = match.index ?? 0;

    if (start > cursor) nodes.push(text.slice(cursor, start));
    nodes.push(
      <strong key={start} className={strongClassName}>
        {match[1]}
      </strong>,
    );
    cursor = start + match[0].length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));

  return (
    <>
      {nodes.map((node, index) => (
        <Fragment key={index}>{node}</Fragment>
      ))}
    </>
  );
}
