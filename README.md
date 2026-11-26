# Kolm Sammu

Kolm Sammu koduleht – React + TypeScript + Vite, ESLint ja Prettier.

## Käivitamine

```sh
npm install
npm run dev        # arendusserver
npm run build      # tootmisversioon kausta dist/
npm run lint       # ESLint
npm run format     # Prettier
npm test           # Vitest
```

## Struktuur

- `src/content/` – kõik lehtede tekstid (avalehe kaardid, meeskond, hinnad, kontaktid)
- `src/pages/` – 8 lehte + 404
- `src/booking/` – vastuvõtuaegade loogika ja broneerimisteenus

## Broneerimine

Esmakohtumised: neljapäev ja reede üle ühe nädala (ankur N 7.01.2027).
Kellaajad on failis `src/booking/slots.ts` (`SLOT_TIMES`).

**NB!** Praegune `LocalStorageBookingService` salvestab broneeringud ainult külastaja enda
brauserisse. Päris kasutuseks tuleb `src/booking/bookingService.ts` liides teostada
serveripoolse teenusega, et broneeringud jõuaksid Kolm Sammuni ja BRONEERITUD-märge oleks
kõigile nähtav.

## Avatud küsimused

- 4. lehe sisu puudus lähtetekstist – ajutiselt on seal „Kontakt“.
- Avalehel on kuus akent, tekste anti viis – kuues on ajutiselt „Koolitused“.
- Facebooki ja Instagrami aadressid: `src/content/site.ts`.
- Lehed „Materjalid“ ja „Huvitavat lugemist“ ootavad sisu.
