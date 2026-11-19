import type { PartnerCategory } from '../config/partners';

/** 16px white category glyphs (Lucide paths) used inside the coral pin circle. */
const CATEGORY_ICON: Record<PartnerCategory, string> = {
  electronics:
    '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/>',
  fashion:
    '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
  home:
    '<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M4 18v2M20 18v2"/>',
  supermarket:
    '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch] ?? ch);

interface PinOptions {
  name: string;
  category: PartnerCategory;
  /** Shown as the white badge on the active pin, e.g. "0-0-3". */
  term?: string;
  active?: boolean;
  muted?: boolean;
}

export function storePinHtml({ name, category, term, active, muted }: PinOptions): string {
  const classes = ['hissa-pin', active ? 'hissa-pin--active' : '', muted ? 'hissa-pin--muted' : ''].join(' ').trim();
  const icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${CATEGORY_ICON[category]}</svg>`;
  const badge = active && term ? `<span class="hissa-pin__term">${escapeHtml(term)}</span>` : '';
  return `<div class="${classes}"><span class="hissa-pin__icon">${icon}</span><span class="hissa-pin__label">${escapeHtml(name)}${badge}</span></div>`;
}

export const USER_DOT_HTML = '<div class="hissa-user-dot"></div>';

/** Approximate clickable area of a pin relative to its anchor (icon centre). */
export const PIN_SHAPE = { type: 'Rectangle', coordinates: [[-20, -20], [190, 20]] } as const;
