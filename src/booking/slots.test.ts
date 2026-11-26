import { describe, expect, it } from 'vitest';
import { isAppointmentDay, upcomingAppointmentDays } from './slots';

describe('appointment days', () => {
  it('matches the January 2027 example dates', () => {
    expect(upcomingAppointmentDays('2027-01-01', 4)).toEqual([
      '2027-01-07',
      '2027-01-08',
      '2027-01-21',
      '2027-01-22',
    ]);
  });

  it('skips the off week', () => {
    expect(isAppointmentDay('2027-01-14')).toBe(false);
    expect(isAppointmentDay('2027-01-15')).toBe(false);
  });

  it('works before the anchor date', () => {
    expect(isAppointmentDay('2026-12-24')).toBe(true);
    expect(isAppointmentDay('2026-12-25')).toBe(true);
    expect(isAppointmentDay('2026-12-31')).toBe(false);
  });

  it('is stable across DST changes', () => {
    expect(upcomingAppointmentDays('2027-03-20', 2)).toEqual(['2027-04-01', '2027-04-02']);
  });
});
