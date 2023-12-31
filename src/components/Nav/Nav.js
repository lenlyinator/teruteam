import styles from './Nav.module.scss'

export default function Nav() {
  return (
    <>
      <nav className={styles.main}>
        <div className={styles.main__logo}><a href="#"><img src={require('../../assets/imgs/general/favicon.png')} alt='TeruTeam logo' /></a></div>
        <div className={styles.main__links}>
          <div className={styles['main__links--tree']}>
            <div>
              <a href="#"><b>Home</b></a>
            </div>
            <div>
              <a href="#"><b>Products</b></a>
            </div>
            <div>
              <a href="#"><b>Project</b></a>
            </div>
            <div>
              <a href="#"><b>About</b></a>
            </div>
            {/* <a href="#"><b>Products</b></a>
            <a href="#"><b>Project</b></a>
            <a href="#"><b>About</b></a> */}
          </div>
        </div>
        <div>
          <a href="#">
            <button className={styles['main__join-btn']}><b>Join TeruTeam!</b></button>
          </a>
        </div>
      </nav>
    </>
  )
}