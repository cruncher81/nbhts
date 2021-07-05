import Image from 'next/image';
import Footer from '../Layout/Footer/Footer';
import HomePageHeader from './HomePageHeader';
import styles from './HomePageLayout.module.css';

function HomePageLayout({ children }) {
  return (
    <div>
      <div className={styles.homeImage}>
        <Image
          src='/images/nbwelcome.png'
          width={500}
          height={500}
          alt='main logo'
        />
      </div>
      <div>
        <HomePageHeader />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default HomePageLayout;
