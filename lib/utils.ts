import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSlug(title: string) {
  if (!title) return '';

  // Make the slug lowercase
  let slug = title.toLowerCase();

  // Replace spaces with hyphens
  slug = slug.replace(/\s+/g, '-');

  // Remove non-word characters (except hyphens)
  slug = slug.replace(/[^a-z0-9\-]+/g, '');

  // Remove duplicate hyphens
  slug = slug.replace(/-{2,}/g, '-');

  // Remove hyphens at the beginning and end (optional)
  slug = slug.replace(/^-|-$/g, '');

  return slug;
}

export function formatDate(timestamp: number | undefined): string | undefined {
  if (!timestamp) return undefined;
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
