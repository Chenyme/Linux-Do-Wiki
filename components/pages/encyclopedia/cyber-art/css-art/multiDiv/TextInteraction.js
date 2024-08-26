import styles from "./TextInteraction.module.css";

// there can not be any space in the text
// one and only one chinese character is allowed
const OlympicRings = ({text}) => {
    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <div className={styles.h1}>{text}</div>
                <div className={styles.h1}>{text}</div>
                <div className={styles.h1}>{text}</div>
            </div>
        </div>
    );
};

export default OlympicRings;