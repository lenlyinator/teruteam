import styles from './HeroHeader.module.scss';
import TeruTeamLogo from '../../assets/imgs/general/teruteam_logo.png';

export default function HeroHeader() {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <h2>Welcome to</h2>
        <img src={TeruTeamLogo} alt="TeruTeam's logo" width={300} className="pe-none" />
      </div>
    </div>
  );
}
