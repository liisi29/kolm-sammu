export interface Audience {
  id: string;
  title: string;
  /** Paragraphs; `link` renders as an inline source link at the end of the paragraph. */
  paragraphs: { text: string; link?: { href: string; label: string } }[];
  bookingLabel: string;
  readMorePath: string;
  readMoreLabel: string;
}

export const audiences: Audience[] = [
  {
    id: 'noorele',
    title: 'Noorele',
    paragraphs: [
      { text: 'Kõik on mõttetu. Kõik on jama ...' },
      { text: 'Sul on tunne, et maailm on sinu vastu. Päriselt?' },
      { text: 'Äkki on keegi, kes mind mõistab...' },
      { text: 'Meie tahame aru saada, mida Sina vajad. Võta ühendust.' },
    ],
    bookingLabel: 'Broneeri aeg',
    readMorePath: '/kes-me-oleme',
    readMoreLabel: 'Loe edasi',
  },
  {
    id: 'lapsevanemale',
    title: 'Lapsevanemale',
    paragraphs: [
      {
        text: 'Sul on tunne, et oled teinud kõik endast oleneva, et toetada oma last. Kuid ikka tunned end süüdi. Süütunne on koormav. Oled tüdinenud lõputust seletamisest, ümarlaudadest. Annad kõik endast oleneva, kuid sellest ikka ei piisa.',
      },
      {
        text: 'Me püüame Sind mõista ja toetada ning saada aru, mida Sa vajad. Sa ei pea olema täiuslik. Me oleme Sinu jaoks olemas.',
      },
    ],
    bookingLabel: 'Broneeri aeg',
    readMorePath: '/kes-me-oleme',
    readMoreLabel: 'Loe edasi',
  },
  {
    id: 'haridusasutusele',
    title: 'Haridusasutusele',
    paragraphs: [
      {
        text: 'Aitame noorel oma tee üles leida. Soovi korral on võimalik kogu protsess juhtumikorraldajale üle anda.',
      },
    ],
    bookingLabel: 'Võta ühendust',
    readMorePath: '/kes-me-oleme',
    readMoreLabel: 'Loe edasi',
  },
  {
    id: 'omavalitsusele',
    title: 'Omavalitsusele',
    paragraphs: [
      {
        text: 'Omavalitsusel on ülesanne tagada vajaduspõhine tugi kõikidele toevajadusega lastele. Alati ei ole see nii lihtne – spetsialiste ei jätku, ajaressurss on piiratud.',
      },
      {
        text: 'Kolm Sammu saab olla abiks ning tõhusa võrgustikutöö abil tuua lapse tagasi hariduse juurde.',
      },
    ],
    bookingLabel: 'Võta ühendust',
    readMorePath: '/kes-me-oleme',
    readMoreLabel: 'Loe edasi',
  },
  {
    id: 'toetajale',
    title: 'Toetajale',
    paragraphs: [
      {
        text: 'Iga lapse õpitee ei kulge sirgjooneliselt ning iga noor vajab, et keegi temasse usuks. 9,6 % kooliõpilastest vajab täiendavat toetust.',
        link: {
          href: 'https://www.err.ee/1610203921/haridusliku-erivajadusega-koolilaste-osakaal-kasvab-kiires-tempos',
          label: 'Allikas: ERR',
        },
      },
      {
        text: 'Meie eesmärk on aidata igal lapsel oma tugevustele toetudes leida enesekindlus. Sihitud tähelepanu, hoolivuse ja võrgustikku kuuluvate täiskasvanute selge rollijaotuse abil tiivustame last pingutama.',
      },
      { text: 'Aitäh, et aitad avastada andeid ning üles leida õppimise mõnu.' },
    ],
    bookingLabel: 'Võta ühendust',
    readMorePath: '/kes-me-oleme',
    readMoreLabel: 'Loe edasi',
  },
  {
    // TODO: kuues aken puudus lähtetekstist – asendada päris tekstiga
    id: 'koolitused',
    title: 'Koolitused',
    paragraphs: [
      {
        text: 'Kolm Sammu pakub haridusasutustele meeskonnakoolitusi. Koolitustel on kokkuleppehind.',
      },
    ],
    bookingLabel: 'Võta ühendust',
    readMorePath: '/koolitused',
    readMoreLabel: 'Loe edasi',
  },
];
