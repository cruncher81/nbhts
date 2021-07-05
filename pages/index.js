import Head from 'next/head';
import Image from 'next/image';
import styles from '../components/HomePage/HomePage.module.css';
import HomePageLayout from '../components/HomePage/HomePageLayout';

function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Northbrook Heights</title>
        <meta
          name='description'
          content='to provide a premium level of care with a dedicated and compassionate team. Understanding the challenges of aging, we continuously strive to enrich the lives of our residents.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePageLayout>
        <section className='main'>
          <div className={`container ${styles.mainContainer}`}>
            <h1 className={styles.title}>Welcome to Northbrook Heights</h1>
            <div className={styles.grid}>
              <div className={styles.leftSide}>
                <Image
                  src='/images/welcome-left.jpg'
                  alt=''
                  width={250}
                  height={250}
                />
              </div>
              <div className={styles.middle}>
                <div>
                  <p className={styles.missionStatement}>
                    Our Mission Statement: To provide a premium level of care
                    with a dedicated and compassionate team. Understanding the
                    challenges of aging, we continuously strive to enrich the
                    lives of our residents.
                  </p>
                </div>
                <div>
                  <p>
                    We are a community oriented adult home providing personal
                    care with 24 hour supervision. Some of the amenities we
                    provide include quality food service,housekeeping and an
                    emphasis on caring for personal needs while respecting our
                    residents personal integrity. We strive for the perfect
                    balance of security, privacy and companionship.
                  </p>
                </div>
              </div>
              <div className={styles.rightSide}>
                <Image
                  src='/images/welcome-right.jpg'
                  alt=''
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>
        </section>
      </HomePageLayout>
    </div>
  );
}

export default HomePage;
