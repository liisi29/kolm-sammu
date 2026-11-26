export const contact = {
  phoneDisplay: '5346 9903',
  phoneHref: 'tel:+37253469903',
  email: 'kolmsammu@gmail.com',
  // TODO: lisa päris lehtede aadressid
  facebookUrl: '',
  instagramUrl: '',
} as const;

export interface NavItem {
  path: string;
  label: string;
}

export const navItems: NavItem[] = [
  { path: '/', label: 'Avaleht' },
  { path: '/kes-me-oleme', label: 'Kes me oleme' },
  { path: '/hinnad', label: 'Hinnad' },
  { path: '/kontakt', label: 'Kontakt' },
  { path: '/broneeri', label: 'Broneeri aeg' },
  { path: '/koolitused', label: 'Koolitused' },
  { path: '/materjalid', label: 'Materjalid' },
  { path: '/huvitavat-lugemist', label: 'Huvitavat lugemist' },
];
