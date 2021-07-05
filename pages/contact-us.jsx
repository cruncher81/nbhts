import Head from 'next/head';
import Map from '../components/Map/Map';
import Layout from '../components/Layout/Layout';
import styles from '../styles/contact-us.module.css';

export default function ContactUsPage() {
  return (
    <Layout>
      <Head>
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css'
          rel='stylesheet'
        />
      </Head>
      <section className={styles.contactMain}>
        <div className={styles.container}>
          <div className={styles.contactForm}>
            <div className={styles.card}>
              <h2>Request a Tour</h2>
              <form action='mailto:marketing@nbhts.com'>
                <div className={styles.formControl}>
                  <input type='text' name='name' placeholder='Name' required />
                </div>

                <div className={styles.formControl}>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    required
                  />
                </div>
                <div className={styles.formControl}>
                  <input
                    type='text'
                    name='phone'
                    placeholder='Phone Number'
                    required
                  />
                </div>
                <div className={styles.formControl}>
                  <input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    required
                  />
                </div>
                <div className={styles.formControl}>
                  <textarea name='message' cols='60' rows='10'></textarea>
                </div>
                <input className={styles.btn} type='submit' value='Send' />
              </form>
            </div>
          </div>
          <div className={styles.map}>
            <Map />
          </div>
        </div>
      </section>
    </Layout>
  );
}
