import { useEffect, useState } from 'react';
import { SpriteIcon } from './SpriteIcon';

export function ScrollTop() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsShown(window.scrollY >= 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`scroll js-scroll ${isShown ? 'scroll--isShown' : ''}`}
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <SpriteIcon id="icon-arrow-top-1-svg" className="icon__scroll" />
    </button>
  );
}
