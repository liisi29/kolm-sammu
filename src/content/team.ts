export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export const team: TeamMember[] = [
  {
    name: 'Kairi',
    role: 'juhtumikorraldaja',
    description:
      'Pikaaegse ja mitmekülgse kogemusega tippspetsialist, karjäärinõustaja, ema ja õpetaja, kes näeb probleemis võimalust ja keerukuses lahendust. Kairi on nagu Eesti oma supernänni – vaatleb, vestleb, analüüsib, mõtleb... ja kui rada aimatav, siis pole muud, kui suuniseid järgida, oma rollis püsida, usaldada ning hoogu hoida.',
  },
  {
    name: 'Kadri',
    role: 'võrgustiku haldaja',
    description:
      'Koostöö hoidja, kes otsib järelejätmatult toetuspunkti, mille abil maailma liigutada. Kolme Sammu käimatõmbamisel on ta esimese sammu astuja, visionäär ja otsija. Kadri on nagu heatahtlik Muumimamma, kes leiab tavapäraste toimetuste kõrval rahumeelse naeratuse saatel oma põhjatust käekotist ootamatu, kuid sobiva lahenduse.',
  },
  {
    name: 'Maret',
    role: 'sotsiaaltöö tippspetsialist',
    description:
      'Kirglik ja hooliv ärakuulaja, koolitaja ja motiveerija, kelle elurõõm, uudishimu ning MI vaimsus on nakkav ja hinge kosutav. Maret on nagu väsimatu Kunksmoor, keda tasub usaldada, sest ta teab kõiki retsepte ning oskab tervendamiseks täpselt õiged annused välja mõõta.',
  },
];
