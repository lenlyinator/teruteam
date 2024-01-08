import styles from './Navbar.module.scss';
import Favicon from '../../assets/imgs/general/favicon.png';

export default function Navbar() {
  return (
    <nav className={styles.main}>
      <div className={styles.logo}>
        <a href="#">
          <img src={Favicon} alt="TeruTeam logo" width={90} className="pe-none" />
        </a>
      </div>
      <div className={styles.links}>
        <div className={styles['links--tree']}>
          <div>
            <a href="./pages/Home/Home.js">
              <b>Home</b>
            </a>
          </div>
          <div>
            <a href="#">
              <b>Products</b>
            </a>
          </div>
          <div>
            <a href="#">
              <b>Project</b>
            </a>
          </div>
          <div>
            <a href="#">
              <b>About</b>
            </a>
          </div>
        </div>
        <div>
          <a href="https://discord.gg/F8Z99D9z3g">
            <button className={styles['join-btn']}>
              <b>Join TeruTeam!</b>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
