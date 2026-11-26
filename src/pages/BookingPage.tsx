import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { bookingService, SlotTakenError } from '../booking/bookingService';
import {
  formatDayLabel,
  parseIsoDate,
  slotKey,
  SLOT_TIMES,
  todayIso,
  toIsoDate,
  upcomingAppointmentDays,
} from '../booking/slots';

const DAYS_SHOWN = 6;
const PHONE_PATTERN = /^\+?[\d\s-]{7,15}$/;

type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success'; label: string }
  | { kind: 'error'; message: string };

export function BookingPage() {
  const days = useMemo(() => {
    // Broneerida saab alates homsest.
    const tomorrow = toIsoDate(parseIsoDate(todayIso()) + 24 * 60 * 60 * 1000);
    return upcomingAppointmentDays(tomorrow, DAYS_SHOWN);
  }, []);

  const [booked, setBooked] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<{ date: string; time: string } | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  useEffect(() => {
    let cancelled = false;
    void bookingService.getBookedSlots().then((slots) => {
      if (!cancelled) setBooked(slots);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!selected) return;
    if (!PHONE_PATTERN.test(phone.trim())) {
      setStatus({ kind: 'error', message: 'Palun sisesta korrektne telefoninumber.' });
      return;
    }
    setStatus({ kind: 'submitting' });
    try {
      await bookingService.book({ ...selected, name: name.trim(), phone: phone.trim() });
      setBooked(await bookingService.getBookedSlots());
      setStatus({
        kind: 'success',
        label: `${formatDayLabel(selected.date)} kell ${selected.time}`,
      });
      setSelected(null);
      setName('');
      setPhone('');
    } catch (err) {
      setStatus({
        kind: 'error',
        message:
          err instanceof SlotTakenError
            ? err.message
            : 'Broneerimine ebaõnnestus. Palun helista või kirjuta meile.',
      });
      setBooked(await bookingService.getBookedSlots());
    }
  }

  return (
    <>
      <h1>Broneeri aeg!</h1>
      <p className="lead">
        Esmane vestlus on tasuta ja kestab kuni 20 minutit. Esmakohtumised toimuvad neljapäeviti ja
        reedeti üle ühe nädala.
      </p>

      {status.kind === 'success' && (
        <div className="notice notice-success" role="status">
          Aitäh! Sinu aeg on broneeritud: <strong>{status.label}</strong>. Võtame Sinuga ühendust.
        </div>
      )}

      <div className="booking-days">
        {days.map((date) => (
          <section key={date} className="card booking-day" aria-label={formatDayLabel(date)}>
            <h2>{formatDayLabel(date)}</h2>
            <ul className="slot-list">
              {SLOT_TIMES.map((time) => {
                const isBooked = booked.has(slotKey(date, time));
                const isSelected = selected?.date === date && selected.time === time;
                return (
                  <li key={time}>
                    <button
                      type="button"
                      className={`slot${isSelected ? ' selected' : ''}`}
                      disabled={isBooked}
                      aria-pressed={isSelected}
                      onClick={() => {
                        setSelected({ date, time });
                        setStatus({ kind: 'idle' });
                      }}
                    >
                      <span>{time}</span>
                      {isBooked && <span className="slot-booked">BRONEERITUD</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      {selected && (
        <form className="card booking-form" onSubmit={handleSubmit}>
          <h2>
            Valitud aeg: {formatDayLabel(selected.date)} kell {selected.time}
          </h2>
          <label>
            Nimi <span className="optional">(soovi korral)</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </label>
          <label>
            Telefoninumber
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              required
            />
          </label>
          {status.kind === 'error' && (
            <p className="notice notice-error" role="alert">
              {status.message}
            </p>
          )}
          <div className="card-actions">
            <button type="submit" className="button" disabled={status.kind === 'submitting'}>
              {status.kind === 'submitting' ? 'Broneerin…' : 'Broneeri'}
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => setSelected(null)}
            >
              Tühista
            </button>
          </div>
        </form>
      )}
    </>
  );
}
