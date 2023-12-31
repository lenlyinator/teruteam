import styles from './HeroHeader.module.scss'

export default function HeroHeader() {
  return (
    <div className={styles.main}>
      <div className={styles.main__text}>
        <img src={require('../../assets/imgs/general/teruteam_logo.png')} />
        <h2>TeruTeam</h2>
      </div>
    </div>
  )
}