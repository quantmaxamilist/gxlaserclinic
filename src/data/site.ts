/**
 * Gerrards Cross Laser Clinic — site content.
 *
 * VERBATIM (from her Instagram @gerrards_cross_laser_clinic, Oct 2026):
 *   name, bio line, phone, website, highlight treatment names.
 * DRAFT (written by Quantweb, no source copy exists yet — Sharon to approve):
 *   every `summary` / `points` field on treatments, area-page intros.
 * Anything marked TODO must be confirmed before launch.
 */

export const site = {
  name: 'Gerrards Cross Laser Clinic',
  // verbatim IG display name
  fullName: 'Gerrards Cross Laser Clinic and Training',
  // verbatim IG bio
  bio: 'Nurse led in ADVANCED AESTHETICS , laser rejuvenation , laser hair removal , bespoke skin boosters , Micro-needling .CELEB CLINIC',
  headline: 'Nurse led in advanced aesthetics', // from bio, sentence-cased
  owner: 'Sharon Gill', // seen on her 2026 award-finalist certificate post
  phone: '01753 885598', // verbatim IG bio
  phoneHref: 'tel:+441753885598',
  email: '', // TODO: Sharon's inbox — also used for the Web3Forms key
  instagram: 'https://www.instagram.com/gerrards_cross_laser_clinic/',
  instagramHandle: '@gerrards_cross_laser_clinic',
  // TODO confirm: listings give 62A Packhorse Rd and "Gerrards Cross Business Centre"
  address: {
    street: '62A Packhorse Road',
    locality: 'Gerrards Cross',
    region: 'Buckinghamshire',
    postcode: 'SL9 8EF',
    country: 'GB',
  },
  geo: { lat: 51.5862, lng: -0.5556 }, // approx. for SL9 8EF — TODO confirm
  hours: 'Mon–Sat, 9am–6pm', // TODO confirm (third-party listing)
  googleMaps: 'https://www.google.com/maps/search/?api=1&query=Gerrards+Cross+Laser+Clinic+Packhorse+Road+SL9+8EF',
  // TODO: paste her Google Place ID to enable the direct "Write a review" link
  googlePlaceId: '',
  award: {
    year: '2026',
    title: 'Finalist — Beauty Business Woman of the Year',
    body: 'The UK Women’s Business Awards', // from the certificate in her award reel
  },
  url: 'https://www.gerrardscrosslaserclinic.co.uk',
};

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  summary: string; // DRAFT
  points: string[]; // DRAFT
  keywords: string[];
};

export const treatments: Treatment[] = [
  {
    slug: 'anti-wrinkle-injections',
    name: 'Anti-Wrinkle Injections',
    short: 'Anti wrinkle',
    summary:
      'Nurse-led anti-wrinkle treatment to soften expression lines across the forehead, frown and crow’s feet — always following a face-to-face consultation.',
    points: ['Forehead, frown & crow’s feet', 'Consultation first', 'Natural, refreshed finish'],
    keywords: ['anti wrinkle injections', 'wrinkle treatment', 'frown lines', 'crow’s feet'],
  },
  {
    slug: 'advanced-filler',
    name: 'Advanced Filler',
    short: 'Filler',
    summary:
      'Dermal filler for lips, under-eyes and facial contour, planned around your features to restore volume and definition.',
    points: ['Lips, cheeks, chin & jaw', 'Under-eye', 'Non-surgical nose'],
    keywords: ['dermal filler', 'lip filler', 'under eye filler', 'non surgical nose job'],
  },
  {
    slug: 'facial-profiling',
    name: 'Facial Profiling',
    short: 'Profiling',
    summary:
      'A full-face approach that balances nose, chin, jaw and cheeks in proportion — mapped out with you before any treatment.',
    points: ['Full-face assessment', 'Proportion & balance', 'Tailored treatment plan'],
    keywords: ['facial profiling', 'facial balancing', 'jawline contouring'],
  },
  {
    slug: 'endolift',
    name: 'Endolift',
    short: 'Endo Lift',
    summary:
      'Minimally invasive laser-assisted lifting that works beneath the skin to tighten and redefine the lower face and jawline.',
    points: ['Laser-assisted lift', 'Jawline & lower face', 'No surgical incisions'],
    keywords: ['endolift', 'endolift laser', 'non surgical face lift', 'jawline tightening'],
  },
  {
    slug: 'hair-exosomes',
    name: 'Hair Exosomes',
    short: 'Hair Exosomes',
    summary:
      'Exosome scalp treatment designed to support thinning hair and a healthier scalp, delivered as a course.',
    points: ['Thinning hair', 'Scalp health', 'Course of sessions'],
    keywords: ['hair exosomes', 'hair loss treatment', 'thinning hair treatment'],
  },
  {
    slug: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    short: 'Laser hair removal',
    summary:
      'Long-term hair reduction for face and body, starting with a consultation and patch test before your course begins.',
    points: ['Face & body areas', 'Patch test first', 'Course of sessions'],
    keywords: ['laser hair removal', 'IPL hair removal', 'permanent hair reduction'],
  },
];

// Also offered — verbatim terms from her IG bio / story highlights
export const alsoOffered = [
  'Laser rejuvenation',
  'Bespoke skin boosters',
  'Micro-needling',
  'Derma roller',
  'Undereye',
  'Fat dissolving',
];

// Local SEO — towns around Gerrards Cross
export const areas = [
  { slug: 'gerrards-cross', name: 'Gerrards Cross', county: 'Buckinghamshire' },
  { slug: 'chalfont-st-peter', name: 'Chalfont St Peter', county: 'Buckinghamshire' },
  { slug: 'chalfont-st-giles', name: 'Chalfont St Giles', county: 'Buckinghamshire' },
  { slug: 'beaconsfield', name: 'Beaconsfield', county: 'Buckinghamshire' },
  { slug: 'denham', name: 'Denham', county: 'Buckinghamshire' },
  { slug: 'fulmer', name: 'Fulmer', county: 'Buckinghamshire' },
  { slug: 'stoke-poges', name: 'Stoke Poges', county: 'Buckinghamshire' },
  { slug: 'farnham-common', name: 'Farnham Common', county: 'Buckinghamshire' },
  { slug: 'iver', name: 'Iver', county: 'Buckinghamshire' },
  { slug: 'seer-green', name: 'Seer Green', county: 'Buckinghamshire' },
  { slug: 'amersham', name: 'Amersham', county: 'Buckinghamshire' },
  { slug: 'chesham', name: 'Chesham', county: 'Buckinghamshire' },
  { slug: 'high-wycombe', name: 'High Wycombe', county: 'Buckinghamshire' },
  { slug: 'marlow', name: 'Marlow', county: 'Buckinghamshire' },
  { slug: 'burnham', name: 'Burnham', county: 'Buckinghamshire' },
  { slug: 'slough', name: 'Slough', county: 'Berkshire' },
  { slug: 'uxbridge', name: 'Uxbridge', county: 'Greater London' },
  { slug: 'ruislip', name: 'Ruislip', county: 'Greater London' },
  { slug: 'rickmansworth', name: 'Rickmansworth', county: 'Hertfordshire' },
  { slug: 'chorleywood', name: 'Chorleywood', county: 'Hertfordshire' },
];

/** Real Google reviews only — paste verbatim with first name + date. Empty = CTA-only section. */
export const reviews: { name: string; text: string; date: string }[] = [];

/** Her own Instagram reels (downloaded at the max public quality, 720p), muted web clips */
export const reels = [
  { code: 'DePCFVhoCQj', video: '/media/reel-DePCFVhoCQj.mp4', poster: '/media/reel-DePCFVhoCQj.jpg' },
  { code: 'DeOShu7IPP4', video: '/media/reel-DeOShu7IPP4.mp4', poster: '/media/reel-DeOShu7IPP4.jpg' },
];
export const portrait = { video: '/media/sharon-award.mp4', poster: '/media/sharon-award.jpg', w: 1076, h: 1056 };

/** Real before & afters sent by the clinic (WhatsApp, Oct 2026). Watermarked with the clinic name. */
export type Result = { src: string; w: number; h: number; treatment: string; slug?: string; alt: string };
export const results: Result[] = [
  { src: '/media/results/endolift-jawline.jpg', w: 1600, h: 1600, treatment: 'Endolift', slug: 'endolift', alt: 'Endolift before and after, jawline and lower face' },
  { src: '/media/results/endolift-face.jpg', w: 1600, h: 1600, treatment: 'Endolift', slug: 'endolift', alt: 'Endolift before and after, cheek and eye area' },
  { src: '/media/results/endolift-arms.jpg', w: 1600, h: 1600, treatment: 'Endolift', slug: 'endolift', alt: 'Endolift before and after, back and underarm' },
  { src: '/media/results/endolift-back.jpg', w: 1600, h: 1600, treatment: 'Endolift', slug: 'endolift', alt: 'Endolift before and after, bra-line area' },
  { src: '/media/results/lip-filler.jpg', w: 1600, h: 1600, treatment: 'Lip filler', slug: 'advanced-filler', alt: 'Lip filler before and after' },
  { src: '/media/results/facial-profiling.jpg', w: 1170, h: 801, treatment: 'Facial profiling', slug: 'facial-profiling', alt: 'Facial profiling before and after, side profile' },
  { src: '/media/results/microneedling.jpg', w: 1600, h: 1600, treatment: 'Micro-needling', alt: 'Micro-needling before and after, cheek skin texture' },
];

/** Faded background photo per treatment card. Client photos where we have them; Pexels stock otherwise (see public/media/CREDITS.json). */
export const cardImages: Record<string, string> = {
  'anti-wrinkle-injections': '/media/cards/anti-wrinkle.jpg',
  'advanced-filler': '/media/results/lip-filler.jpg',
  'facial-profiling': '/media/results/facial-profiling.jpg',
  'endolift': '/media/results/endolift-jawline.jpg',
  'hair-exosomes': '/media/cards/hair-exosomes.jpg',
  'laser-hair-removal': '/media/cards/laser-hair-removal.jpg',
};
