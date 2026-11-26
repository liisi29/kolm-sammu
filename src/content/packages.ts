export interface ServicePackage {
  name: string;
  price: string;
  paragraphs: string[];
}

export const packages: ServicePackage[] = [
  {
    name: 'Kontaktivõtt',
    price: 'tasuta',
    paragraphs: [
      'Esmane kontaktivõtt ning konsultatsioon aitab aru saada, kas Kolm Sammu saab noort ja tema peret aidata. Esmane kontaktivõtt toimub kas telefoni teel või lühikese kohtumisena ning mahub ajaliselt 20 minuti sisse. Esmane kontaktivõtt on tasuta.',
    ],
  },
  {
    name: 'Juhtumikorralduse stardipakett',
    price: '1400 eurot',
    paragraphs: [
      'Stardipakett sisaldab ühte 90-minutilist kohtumist perega, noore võrgustikku kuuluvate spetsialistidega suhtlemist ja koostööd, dokumenditööd ning kolme 60-minutilist kohtumist noore ja tema pere osalusel.',
      'Kolme Sammu spetsialistid kuulavad ära noore loo ja vajadused, tema vanemate vajadused ning süvenevad juhtumisse, vestlevad noore lähivõrgustiku liikmetega ja koostöös arutatakse läbi kõikide osapoolte rollid ning ülesanded. Sõlmitakse selged kokkulepped. Kohtumised toimuvad kas iga nädal või vajadusel üle ühe nädala. Analüüsitakse ja pannakse tähele nii suuri kui ka väikeseid muutusi.',
    ],
  },
  {
    name: 'Juhtumikorralduse jätkupakett',
    price: '1200 eurot',
    paragraphs: [
      'Jätkupakett on vajalik, kui noor vajab muudatusteks aega, ilmneb uusi asjaolusid või on muul põhjusel pikem koostöö vajalik. Jätkupakett annab muudatustega kohanemiseks ja motivatsiooni hoidmiseks vajalikku aega ja seirab stardipaketiga alustatud tegevuste tulemuslikkust, pakub vanemale tuge.',
      'Jätkupakett sisaldab nelja 60-minutilist kohtumist noore ja tema perekonna ning vajadusel võrgustiku liikmetega. Hoitakse ning uuendatakse kokkuleppeid. Kohtumised toimuvad kas iga nädal, vajadusel üle ühe või üle kahe nädala.',
    ],
  },
  {
    name: 'Juhtumikorralduse lõpupakett',
    price: '1000 eurot',
    paragraphs: [
      'Lõpupakett sisaldab nelja 45-minutilist kohtumist, millest kaks toimuvad veebi teel. Lõpupakett sobib, kui noore tegevuses ja hariduskäitumises on selgelt ilmnenud soovitud muutused.',
      'Lõpupakett aitab kinnistada uusi harjumusi ning süveneda paranenud suhetel. Lõpupaketi kohtumised võivad toimuda kahe või kolme nädalaste intervallidega, vastavalt protsessi kulule ja tulemustele.',
    ],
  },
];
