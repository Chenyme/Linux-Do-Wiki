import React, { useState, useCallback, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import styles from './TooltipWrapper.module.css';

const TooltipWrapper = ({ tooltipId, children, tooltipChildren, initialPlace = "top" }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [clearTooltip, setClearTooltip] = useState(false);
  const [place, setPlace] = useState(initialPlace);

  const handleMouseEnterAnchor = useCallback(() => {
    setShowTooltip(false);
  }, []);

  const handleMouseLeaveAnchor = useCallback(() => {
    setShowTooltip(true);
  }, []);

  const handleMouseEnterTooltip = useCallback(() => {
    setClearTooltip(false);
  }, []);

  const handleMouseLeaveTooltip = useCallback(() => {
    setClearTooltip(false);
    setTimeout(() => setShowTooltip(false), 500);
  }, []);

  useEffect(() => {
    const anchorElement = document.getElementById(tooltipId);
    if (anchorElement) {
      const rect = anchorElement.getBoundingClientRect();
      if (rect.top < 380) {
        setPlace('bottom');
      } else if (window.innerHeight - rect.bottom < 50) {
        setPlace('top');
      } else {
        setPlace(initialPlace);
      }
    }
  }, [tooltipId, initialPlace, showTooltip]);

  return (
    <span>
      <a
        id={tooltipId}
        className={styles.tooltipAnchor}
        onMouseEnter={handleMouseEnterAnchor}
        onMouseLeave={handleMouseLeaveAnchor}
        data-tooltip-delay-show={200}
        data-tooltip-delay-hide={500}
        role="button"
      >
        {children}
      </a>
      <Tooltip
        anchorSelect={`#${tooltipId}`}
        clickable
        place={place}
        className={`${styles.tooltipContent} ${showTooltip ? styles.show : ''} ${clearTooltip ? styles.clear : ''}`}
        onMouseEnter={handleMouseEnterTooltip}
        onMouseLeave={handleMouseLeaveTooltip}
      >
        {tooltipChildren}
      </Tooltip>
    </span>
  );
};

export default TooltipWrapper;
