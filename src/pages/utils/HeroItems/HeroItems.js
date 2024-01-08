import Navbar from '../../../components/Navbar/Navbar';
import HeroHeader from '../../../components/HeroHeader/HeroHeader';
import styles from './HeroItems.module.scss';

export default function HeroItems() {
  return (
    <div className={styles.main}>
      <Navbar />
      <HeroHeader />
    </div>
  );
}
