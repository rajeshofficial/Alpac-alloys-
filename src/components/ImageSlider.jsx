import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function ImageSlider({ slides, autoPlay = false, interval = 5000, fullScreen = false }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update(); query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (!autoPlay || paused || reducedMotion || slides.length < 2) return;
    const timer = setInterval(() => setCurrent(index => (index + 1) % slides.length), interval);
    return () => clearInterval(timer);
  }, [autoPlay, paused, reducedMotion, slides.length, interval]);
  const index = Math.min(current, Math.max(0, slides.length - 1));
  if (!slides.length) return null;
  const slide = slides[index];
  const move = direction => { setPaused(true); setCurrent((index + direction + slides.length) % slides.length); };
  return <section aria-label="Company and casting photographs" aria-roledescription="carousel" className={fullScreen ? 'hero-image hero-slider' : 'relative overflow-hidden h-80 md:h-96 rounded-lg'}>
    <img key={slide.image} src={slide.image} srcSet={slide.srcSet} sizes="100vw" alt={slide.title} fetchPriority={index === 0 ? 'high' : 'auto'} className="slider-photo w-full h-full object-cover" />
    <p className={fullScreen ? 'hero-slide-caption' : 'absolute inset-x-0 bottom-0 bg-black/70 text-white p-4'}>{slide.caption}</p>
    {slides.length > 1 && <div className="slider-controls" aria-label="Slideshow controls">
      <button type="button" aria-label="Previous photograph" onClick={() => move(-1)}><ChevronLeft size={18} aria-hidden="true" /></button>
      <div className="slider-dots">
        {slides.map((item, number) => <button key={item.title} type="button" aria-label={`Show photograph ${number + 1}: ${item.title}`} aria-pressed={number === index} onClick={() => { setCurrent(number); setPaused(true); }}><span className={number === index ? 'is-active' : ''} /></button>)}
      </div>
      <button type="button" aria-label="Next photograph" onClick={() => move(1)}><ChevronRight size={18} aria-hidden="true" /></button>
      {autoPlay && !reducedMotion && <button type="button" aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} onClick={() => setPaused(!paused)}>{paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}</button>}
    </div>}
  </section>;
}
