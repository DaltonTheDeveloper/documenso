// Mirrors a documenso-style slug bug: a title with consecutive non-alphanumerics produces double
// hyphens and leading/trailing hyphens instead of a clean, single-hyphen slug. Collapse and trim.
export function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]/g, "-");
}
