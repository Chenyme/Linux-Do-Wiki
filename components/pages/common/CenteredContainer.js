import React from 'react';
import styles from './CenteredContainer.module.css';

const CenteredContainer = ({ children }) => {
  return <div className={styles.centeredContainer}>{children}</div>;
};

export default CenteredContainer;
