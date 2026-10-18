// Mirrors documenso/documenso#3435: extractInitials drops the last initial when a name
// has a leading or double space. Fix this function so the frozen acceptance test passes.
export function extractInitials(text) {
  return text.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}
