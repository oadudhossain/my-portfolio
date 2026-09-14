'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import AnimatedButton from '../ui/AnimatedButton';
import ThemeToggle from '../ui/ThemeToggle';

const navItems = [{ id: 'work', label: 'Websites' }, { id: 'about', label: 'About' }, { id: 'study', label: 'Study' }, { id: 'contact', label: 'Contact' }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const toggle = useRef(null);
  const nav = useRef(null);
  useEffect(() => {
    let frame;
    const sections = [...document.querySelectorAll('main section[id]')];
    const update = () => {
      setScrolled(window.scrollY > 24);
      const current = sections.filter(section => section.getBoundingClientRect().top <= window.innerHeight * .35).at(-1);
      setActive(current?.id || 'home');
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    const outside = event => { if (!nav.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', escape); document.removeEventListener('pointerdown', outside); };
  }, [open]);
  return <header ref={nav} className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="nav-inner shell">
      <a className="brand" href="#home" aria-label="Oadud Hossain, home" onClick={() => setOpen(false)}><Image src="/brand/logo.png" alt="Oadud Hossain full-stack developer logo" width={1448} height={1086} priority sizes="124px" /></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(({id, label}, i) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}><span className="mono">0{i + 1}</span>{label}</a>)}</nav>
      <div className="nav-cta"><AnimatedButton href="#contact" variant="secondary">Let’s talk</AnimatedButton></div>
      <ThemeToggle />
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" ref={toggle} onClick={() => setOpen(!open)}><span>{open ? 'Close' : 'Menu'}</span><span className={`menu-lines ${open ? 'open' : ''}`} aria-hidden="true"><i /><i /></span></button>
    </div>
    <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{navItems.map(({id, label}, i) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><span className="mono">0{i + 1}</span>{label}<span aria-hidden="true">↗</span></a>)}</nav>
  </header>;
}
