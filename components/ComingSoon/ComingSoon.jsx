import Image from 'next/image';
import Link from 'next/link';
import styles from './ComingSoon.module.css';

function ComingSoon() {
  return (
    <div className='container'>
      <div className={styles.imageWrapper}>
        <Image
          src='/images/nbwelcome.png'
          width={500}
          height={500}
          alt='main logo'
        />
      </div>
      <section className={styles.comingSoon}>
        <div className={styles.comingSoonContainer}>
          <h1>Welcome to Northbrook Heights</h1>
          <h2>Great things coming soon</h2>
          <Link href='/' passHref>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              Go Back
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ComingSoon;
