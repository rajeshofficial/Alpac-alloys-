import { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ slides, autoPlay = true, interval = 5000, fullScreen = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const resetAutoplay = () => {
    if (autoPlay) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      }, interval);
    }
  };

  useEffect(() => {
    resetAutoplay();
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoplay();
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    resetAutoplay();
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    resetAutoplay();
  };

  if (slides.length === 0) return null;

  const containerClass = fullScreen
    ? 'relative w-full h-full overflow-hidden'
    : 'relative w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-lg';

  return (
    <div className={containerClass}>
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={`slide-${slide.title}-${index}`} className="w-full h-full flex-shrink-0 relative">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            {!fullScreen && slide.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <p className="text-lg font-medium">{slide.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer w-6 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'h-2 bg-blue-500 shadow-md' : 'h-1.5 bg-white bg-opacity-40'
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
