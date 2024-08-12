import styles from "./OlympicRings.module.css"

const OlympicRings = () => {
    return (
        <div className={styles.olympicSymbol}>
            <div className={`${styles.ring} ${styles.blue}`}></div>
            <div className={`${styles.ring} ${styles.yellow}`}></div>
            <div className={`${styles.ring} ${styles.black}`}></div>
            <div className={`${styles.ring} ${styles.green}`}></div>
            <div className={`${styles.ring} ${styles.red}`}></div>
        </div>
    );
};

export default OlympicRings;