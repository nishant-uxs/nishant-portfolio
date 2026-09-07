export function splitTextToChars(text: string) {
  return text.split("").map((char, index) => ({
    char: char === " " ? "\u00A0" : char,
    index,
  }));
}

export function splitTextToWords(text: string) {
  return text.split(" ").map((word, index) => ({
    word,
    index,
  }));
}

export function wrapLines(text: string, maxChars = 42) {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines;
}
