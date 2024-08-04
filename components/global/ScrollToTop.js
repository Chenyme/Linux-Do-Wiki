import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      aria-hidden="true"
      className={`nx-flex nx-items-center nx-gap-1.5 nx-transition nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50 ${isScrolled ? '' : 'nx-opacity-0'}`}
      style={{ transition: 'opacity 0.3s linear' }}
      onClick={handleClick}>
      回到顶部
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="-nx-rotate-90 nx-w-3.5 nx-h-3.5 nx-border nx-rounded-full nx-border-current">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  )
}

export default ScrollToTop