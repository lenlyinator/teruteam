import styles from './Navbar.module.scss';

export default function Nav() {
  return (
    <nav className={styles.main}>
      <div className={styles.logo}>
        <a href="#">
          <img src={require('../../assets/imgs/general/favicon.png')} alt="TeruTeam logo" />
        </a>
      </div>
      <div className={styles.links}>
        <div className={styles['links--tree']}>
          <div>
            <a href="#">
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
      </div>
      <div>
        <a href="#">
          <button className={styles['join-btn']}>
            <b>Join TeruTeam!</b>
          </button>
        </a>
      </div>
    </nav>
  );
}
