
import { Citation } from "@/types/paper";

export function formatCitation(citation: Citation, style: string): string {
  switch (style) {
    case "APA":
      return formatAPA(citation);
    case "MLA":
      return formatMLA(citation);
    case "Chicago":
      return formatChicago(citation);
    case "IEEE":
      return formatIEEE(citation);
    default:
      return formatAPA(citation);
  }
}

function formatAPA(citation: Citation): string {
  const authors = formatAPAAuthors(citation.authors);
  return `${authors} (${citation.year}). ${citation.title}. <i>${citation.source}</i>. ${citation.doi ? `https://doi.org/${citation.doi}` : citation.url || ""}`;
}

function formatAPAAuthors(authors: string[]): string {
  if (authors.length === 0) return "";
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} & ${authors[1]}`;
  return `${authors[0]} et al.`;
}

function formatMLA(citation: Citation): string {
  const authors = formatMLAAuthors(citation.authors);
  return `${authors}. "${citation.title}." <i>${citation.source}</i>, ${citation.year}. ${citation.url ? `<i>Web</i>.` : ""}`;
}

function formatMLAAuthors(authors: string[]): string {
  if (authors.length === 0) return "";
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
  return `${authors[0]} et al.`;
}

function formatChicago(citation: Citation): string {
  const authors = formatChicagoAuthors(citation.authors);
  return `${authors}. "${citation.title}." <i>${citation.source}</i> (${citation.year}).${citation.doi ? ` https://doi.org/${citation.doi}` : citation.url ? ` ${citation.url}` : ""}`;
}

function formatChicagoAuthors(authors: string[]): string {
  if (authors.length === 0) return "";
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
  if (authors.length === 3) return `${authors[0]}, ${authors[1]}, and ${authors[2]}`;
  return `${authors[0]} et al.`;
}

function formatIEEE(citation: Citation): string {
  const authorList = citation.authors.map((author, i) => {
    const parts = author.split(' ');
    const lastName = parts.pop();
    const initials = parts.map(name => `${name.charAt(0)}.`).join(' ');
    return initials ? `${initials} ${lastName}` : lastName;
  }).join(", ");
  
  return `[${citation.id}] ${authorList}, "${citation.title}," <i>${citation.source}</i>, ${citation.year}.`;
}
