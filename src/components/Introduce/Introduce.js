import styles from './Introduce.module.scss';

export default function Introduce() {
  return (
    <div className={`${styles.container} ${styles['main-content']}`}>
      <h1 className={styles.title}>
        <span className={styles['title__h1--text-highlight']}>Who</span> we are?
      </h1>
    </div>
  );
}
