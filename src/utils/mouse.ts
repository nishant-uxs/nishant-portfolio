export function getPointerNormalized(x: number, y: number) {
  return {
    x: x / window.innerWidth,
    y: y / window.innerHeight,
    nx: (x / window.innerWidth) * 2 - 1,
    ny: -((y / window.innerHeight) * 2 - 1),
  };
}

export function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(
    target.closest(
      "a, button, [role='button'], input, textarea, select, [data-cursor='hover']",
    ),
  );
}

export function isTextTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(target.closest("p, span, h1, h2, h3, h4, li, label"));
}
