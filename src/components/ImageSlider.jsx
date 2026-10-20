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
  const move = direction => { setPaused(true); setCurrent((index + direction + slides.length) % slides.length); };
  return <section aria-label="Casting photographs" aria-roledescription="carousel" className={`relative overflow-hidden ${fullScreen ? 'h-full' : 'h-80 md:h-96 rounded-lg'}`} onFocusCapture={() => setPaused(true)}>
    <img src={slides[index].image} alt={slides[index].title} className="w-full h-full object-cover" />
    {!fullScreen && <p className="absolute inset-x-0 bottom-0 bg-black/70 text-white p-4">{slides[index].caption}</p>}
    {slides.length > 1 && <>
      <button type="button" aria-label="Previous photograph" onClick={() => move(-1)} className="absolute left-3 top-1/2 bg-black/70 text-white p-3 rounded-full"><ChevronLeft aria-hidden="true" /></button>
      <button type="button" aria-label="Next photograph" onClick={() => move(1)} className="absolute right-3 top-1/2 bg-black/70 text-white p-3 rounded-full"><ChevronRight aria-hidden="true" /></button>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex bg-black/70 rounded-full p-1">
        {slides.map((slide, number) => <button key={slide.title} type="button" aria-label={`Show photograph ${number + 1}: ${slide.title}`} aria-pressed={number === index} onClick={() => { setCurrent(number); setPaused(true); }} className="w-11 h-11 text-white"><span className={`inline-block w-2 h-2 rounded-full ${number === index ? 'bg-red-500' : 'bg-white'}`} /></button>)}
        {autoPlay && !reducedMotion && <button type="button" aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} onClick={() => setPaused(!paused)} className="w-11 h-11 flex items-center justify-center text-white">{paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}</button>}
      </div>
    </>}
  </section>;
}
