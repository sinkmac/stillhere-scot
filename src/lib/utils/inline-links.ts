export type InlineChunk =
  | { type: 'text'; value: string }
  | { type: 'link'; label: string; href: string };

const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

export const parseBracketLinks = (input: string): InlineChunk[] => {
  const chunks: InlineChunk[] = [];
  let lastIndex = 0;

  for (const match of input.matchAll(linkPattern)) {
    const [fullMatch, label, href] = match;
    const index = match.index ?? 0;

    if (index > lastIndex) {
      chunks.push({ type: 'text', value: input.slice(lastIndex, index) });
    }

    chunks.push({ type: 'link', label, href });
    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < input.length) {
    chunks.push({ type: 'text', value: input.slice(lastIndex) });
  }

  return chunks;
};
