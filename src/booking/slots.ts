/**
 * Esmakohtumised toimuvad neljapäeval ja reedel üle ühe nädala.
 * Ankur: N 7. jaanuar 2027 (näide lähtetekstist: N 7.1, R 8.1, N 21.1, R 22.1).
 *
 * Kuupäevi käsitletakse kujul "YYYY-MM-DD" ja arvutatakse UTC-s,
 * et suveaja vahetus ei nihutaks päevi.
 */

export const ANCHOR_THURSDAY = '2027-01-07';

/** Kellaajad, mis on igal vastuvõtupäeval broneeritavad (20-minutilised vestlused). */
export const SLOT_TIMES = ['10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30'];

const DAY_MS = 24 * 60 * 60 * 1000;

export function parseIsoDate(iso: string): number {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y!, m! - 1, d!);
}

export function toIsoDate(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10);
}

export function todayIso(now: Date = new Date()): string {
  return toIsoDate(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

/** Kas antud kuupäev on vastuvõtupäev (N või R ankurnädalaga samas paarisrütmis). */
export function isAppointmentDay(iso: string): boolean {
  const diffDays = Math.round((parseIsoDate(iso) - parseIsoDate(ANCHOR_THURSDAY)) / DAY_MS);
  const mod14 = ((diffDays % 14) + 14) % 14;
  return mod14 === 0 || mod14 === 1;
}

/** Järgmised `count` vastuvõtupäeva alates kuupäevast `fromIso` (kaasa arvatud). */
export function upcomingAppointmentDays(fromIso: string, count: number): string[] {
  const result: string[] = [];
  let ms = parseIsoDate(fromIso);
  while (result.length < count) {
    const iso = toIsoDate(ms);
    if (isAppointmentDay(iso)) result.push(iso);
    ms += DAY_MS;
  }
  return result;
}

export function slotKey(date: string, time: string): string {
  return `${date}T${time}`;
}

const weekdayFormat = new Intl.DateTimeFormat('et-EE', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
});

export function formatDayLabel(iso: string): string {
  return weekdayFormat.format(new Date(parseIsoDate(iso)));
}
