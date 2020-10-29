import React from 'react';
import useStyles from './spiner-style';

const Spinner = () => {

  const styles = useStyles();

  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.dualRing}></div>
    </div>
  );
};

export default Spinner;
