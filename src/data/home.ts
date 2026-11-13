import type { ImageMetadata } from 'astro';
import hero from '../assets/hero.jpg';
import oudsberg from '../assets/oudsberg.jpg';
import kessenich from '../assets/kessenich.jpg';
import molen from '../assets/molen.jpg';
import zoektocht from '../assets/zoektocht.jpg';
import terhills from '../assets/terhills.jpg';
import smeetshof from '../assets/smeetshof.jpg';
import plitvice from '../assets/plitvice.jpg';
import laura from '../assets/laura.jpg';
import video from '../assets/video.jpg';

const original = 'https://www.explauradise.com';
export const site = {
  title: 'Explauradise — wandelen, reizen & buiten zijn',
  description: 'Ontdek de mooiste wandelroutes, bijzondere overnachtingen en avontuurlijke reizen met Laura. Een persoonlijke blog vol inspiratie om naar buiten te gaan.',
  tagline: 'Explore Laura’s Paradise',
  hero,
  heroAlt: 'Laura op een houten vlonder aan een turquoise meer, omringd door groene bergen',
  laura,
  video,
  videoUrl: 'https://www.youtube.com/watch?v=CG80Nqjw4go',
  aboutUrl: `${original}/over-mij/`,
  contactUrl: `${original}/contact/`,
  intro: [
    'Ik ben Laura, een leerkracht uit Limburg, België. Het liefst ben ik buiten: op een wandelpad dicht bij huis, op zoek naar een bijzondere overnachting of op avontuur aan de andere kant van de wereld.',
    'Explauradise staat voor Explore Laura’s Paradise. Wat in 2017 begon als een persoonlijk fotoalbum op Instagram, groeide uit tot een plek waar ik mijn avonturen uitgebreider met je deel. Ik hoop je te inspireren om zelf naar buiten te gaan!',
  ],
};

export const socials = [
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/explauradise/' },
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/Explauradise' },
  { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/channel/UCv7lYR78LVl3IF92non3uoQ' },
] as const;

export interface Category {
  title: string;
  description: string;
  href: string;
  image: ImageMetadata;
  alt: string;
}
export const categories: Category[] = [
  { title: 'Wandelen', description: 'Ontdek de mooiste wandelroutes', href: `${original}/wandelen/`, image: oudsberg, alt: 'Een rustig meer tussen de groene bomen van de Oudsberg' },
  { title: 'Overnachten', description: 'Ontdek de leukste overnachtingen', href: `${original}/overnachten/`, image: molen, alt: 'Laura op een vlonder tijdens een verblijf bij de Biesbosch' },
  { title: 'Lifestyle', description: 'Genieten van de kleine dingen', href: `${original}/lifestyle/`, image: kessenich, alt: 'Een bloemenrijk wandelpad langs het water in Kessenich' },
  { title: 'Reizen', description: 'Ontdek de avontuurlijkste reizen', href: `${original}/reizen/`, image: plitvice, alt: 'Het heldere water en de groene natuur van de Plitvicemeren' },
];

export interface Article {
  title: string;
  category: string;
  date: string;
  href: string;
  image: ImageMetadata;
  alt: string;
}
export const articles: Article[] = [
  { title: 'Wandelen in Donderslag, Oudsbergen', category: 'Wandelen', date: '2021-10-07', href: `${original}/wandelen/wandelen-in-donderslag-oudsbergen/`, image: oudsberg, alt: 'Zonlicht door de bladeren aan een meer in Oudsbergen' },
  { title: 'Wandelen in Kessenich', category: 'Wandelen', date: '2021-10-07', href: `${original}/wandelen/wandelen-in-kessenich/`, image: kessenich, alt: 'Laura wandelt over een smal pad tussen het water en wilde bloemen' },
  { title: 'Slapen in een molen nabij Nationaal Park De Biesbosch', category: 'Overnachten', date: '2021-07-29', href: `${original}/overnachten/slapen-in-een-molen-nabij-nationaal-park-de-biesbosch/`, image: molen, alt: 'Laura op een houten vlonder in de natuur bij de Biesbosch' },
  { title: 'Zoektochten voor kinderen', category: 'Wandelen', date: '2021-07-29', href: `${original}/wandelen/zoektochten-voor-kinderen/`, image: zoektocht, alt: 'Een kind zoekt met een speurkaart naar ontdekkingen in het bos' },
  { title: 'Wandelen in Terhills', category: 'Wandelen', date: '2021-07-25', href: `${original}/wandelen/wandelen-in-terhills/`, image: terhills, alt: 'Het waterrijke landschap van Terhills' },
  { title: 'Wandelen in het Smeetshof', category: 'Wandelen', date: '2021-07-15', href: `${original}/wandelen/wandelen-in-het-smeetshof/`, image: smeetshof, alt: 'De groene natuur van het Smeetshof' },
];

export const inspiration = [
  { image: plitvice, alt: 'Turquoise water tussen het groen bij de Plitvicemeren' },
  { image: kessenich, alt: 'Een zomerse wandeling langs het water in Kessenich' },
  { image: terhills, alt: 'Even op adem komen in de natuur van Terhills' },
  { image: oudsberg, alt: 'Doorkijkje tussen de bladeren naar een stil meer' },
];

export const footerGroups = [
  { title: 'Blog', links: categories.map(({ title, href }) => ({ title, href })) },
  { title: 'Reizen', links: [
    { title: 'Indonesië', href: `${original}/indonesie/` },
    { title: 'Slovenië', href: `${original}/slovenie/` },
  ] },
  { title: 'Over mij', links: [
    { title: 'Over mij', href: site.aboutUrl },
    { title: 'Contact', href: site.contactUrl },
  ] },
];
