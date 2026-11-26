export interface BookingRequest {
  date: string;
  time: string;
  name: string;
  phone: string;
}

export interface BookingService {
  /** Broneeritud ajad kujul "YYYY-MM-DDTHH:mm". Isikuandmeid avalikult ei tagastata. */
  getBookedSlots(): Promise<Set<string>>;
  book(request: BookingRequest): Promise<void>;
}

export class SlotTakenError extends Error {
  constructor() {
    super('See aeg on juba broneeritud.');
  }
}

const STORAGE_KEY = 'kolm-sammu:bookings';

/**
 * NB! Demo-teostus: hoiab broneeringuid ainult selle brauseri localStorage'is.
 * Päris kasutuseks tuleb asendada serveripoolse teenusega (nt Supabase, Firebase,
 * Google Calendar API või oma API), et broneeringud jõuaksid Kolm Sammuni
 * ja BRONEERITUD-märge oleks nähtav kõigile külastajatele.
 */
export class LocalStorageBookingService implements BookingService {
  private read(): BookingRequest[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as BookingRequest[]) : [];
    } catch {
      return [];
    }
  }

  async getBookedSlots(): Promise<Set<string>> {
    return new Set(this.read().map((b) => `${b.date}T${b.time}`));
  }

  async book(request: BookingRequest): Promise<void> {
    const all = this.read();
    if (all.some((b) => b.date === request.date && b.time === request.time)) {
      throw new SlotTakenError();
    }
    all.push(request);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  }
}

export const bookingService: BookingService = new LocalStorageBookingService();
