import { format, parseISO } from 'date-fns';

export function formatDate(date: Date): string {
  const year = date.getUTCFullYear().toString();
  const month = padDate((date.getUTCMonth() + 1).toString());
  const day = padDate(date.getUTCDate().toString());
  const isoDate = parseISO(`${year}-${month}-${day}`);

  return format(isoDate, 'MMMM dd, yyyy');
}

function padDate(date: string) {
  return date.padStart(2, '0');
}
