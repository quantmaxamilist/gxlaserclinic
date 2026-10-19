import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// smooth scroll on the GSAP ticker
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.11 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

// reveals — transform/opacity only, ~92% down the screen, with fallback sweep
const items = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
items.forEach((el, i) => { el.style.transitionDelay = `${Math.min((i % 4) * 60, 180)}ms`; io.observe(el); });
const sweep = () => items.forEach((el) => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('is-in'); });
addEventListener('scroll', sweep, { passive: true });
setTimeout(sweep, 1200);

// header: solid after hero, hide on scroll down
const hdr = document.querySelector<HTMLElement>('[data-hdr]');
let lastY = 0;
const onScroll = () => {
  if (!hdr) return;
  const y = scrollY;
  hdr.classList.toggle('is-solid', y > 40);
  hdr.classList.toggle('is-hidden', y > 400 && y > lastY && !document.body.classList.contains('menu-open'));
  lastY = y;
};
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// mobile menu
const burger = document.querySelector<HTMLButtonElement>('[data-burger]');
const mnav = document.querySelector<HTMLElement>('[data-mnav]');
burger?.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') !== 'true';
  burger.setAttribute('aria-expanded', String(open));
  if (mnav) mnav.hidden = !open;
  document.body.classList.toggle('menu-open', open);
  hdr?.classList.add('is-solid');
  open ? lenis?.stop() : lenis?.start();
});

// cursor (desktop only)
const cur = document.querySelector<HTMLElement>('.cursor');
if (cur && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const ring = cur.querySelector<HTMLElement>('.cursor__ring')!;
  const dot = cur.querySelector<HTMLElement>('.cursor__dot')!;
  const rx = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3' });
  const ry = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3' });
  addEventListener('pointermove', (e) => { cur.classList.add('is-on'); rx(e.clientX); ry(e.clientY); dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`; });
  document.addEventListener('pointerover', (e) => cur.classList.toggle('is-link', !!(e.target as Element).closest('a,button,label')));
}

// page transitions: ≤0.35s out, 0.4s in
const curtain = document.querySelector<HTMLElement>('.curtain');
if (curtain && !reduce) {
  gsap.fromTo(curtain, { yPercent: 0 }, { yPercent: -100, duration: 0.4, ease: 'power2.inOut', delay: 0.02, onComplete: () => { curtain.style.visibility = 'hidden'; } });
  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest('a') as HTMLAnchorElement | null;
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.pathname === location.pathname || a.hasAttribute('download') || a.href.startsWith('tel:')) return;
    e.preventDefault();
    curtain.style.animation = 'none'; curtain.style.visibility = 'visible';
    gsap.fromTo(curtain, { yPercent: 100 }, { yPercent: 0, duration: 0.32, ease: 'power2.in', onComplete: () => { location.href = url.href; } });
  });
  addEventListener('pageshow', (e) => { if (e.persisted) { gsap.set(curtain, { yPercent: -100 }); curtain.style.visibility = 'hidden'; } });
}

// refresh ScrollTrigger only if height changed after fonts
const h0 = document.body.scrollHeight;
document.fonts?.ready.then(() => { if (document.body.scrollHeight !== h0) ScrollTrigger.refresh(); });

// muted clips: play only while on screen, never for reduced motion
const vids = [...document.querySelectorAll<HTMLVideoElement>('video.gx-vid')];
if (!reduce && vids.length) {
  const vio = new IntersectionObserver((es) => es.forEach((e) => {
    const v = e.target as HTMLVideoElement;
    if (e.isIntersecting) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
  }), { threshold: 0.25 });
  vids.forEach((v) => vio.observe(v));
}
