import Layout from '../components/Layout/Layout';
import styles from '../styles/about.module.css';

function AboutPage() {
  return (
    <Layout>
      <div className={`${styles.container} ${styles.main__container}`}>
        <div className={styles.about__container}>
          <h1 className={styles.brushFamily}>Our Vision…</h1>
          <p>
            It is our vision to be the preferred senior living facility through
            consistent self-improvement while preserving the culture of our
            community. We are driven by the individual values of our residents,
            their families and our dedicated team.
          </p>
          <h1 className={styles.brushFamily}>Our Goal…</h1>
          <p>
            It is our goal to provide our residents with the highest standard of
            personal care in a safe and friendly atmosphere. We are dedicated to
            provide the perfect balance of security, service, dignity and
            companionship.
          </p>
        </div>
        <div className='core-values__container my-3'>
          <h1 className={styles.brushFamily}>Our Core Values</h1>
          <h2>
            <span className={`${styles.brushFamily} ${styles.lgFont}`}>N</span>
            urture
          </h2>
          <p className='m-dash'>
            &mdash; We nurture and encourage the continued growth and
            development of our residents.
          </p>
          <h2>
            <span className={`${styles.brushFamily} ${styles.lgFont}`}>O</span>
            wnership
          </h2>
          <p>
            &mdash;We are locally owned and operated. This means ownership is in
            house and on floor. Our Executive Director/Partner is directly
            involved in the day to day operation and wellbeing of our residents.
          </p>
          <h2>
            <span className={`${styles.brushFamily} ${styles.lgFont}`}>R</span>
            espect
          </h2>
          <p>
            &mdash;We have a genuine regard for each individual’s needs, values,
            feelings, opinions, wishes, rights and privacy.
          </p>
          <h2>
            <span className={`${styles.brushFamily} ${styles.lgFont}`}>T</span>
            ransparency
          </h2>
          <p>
            &mdash;we operate in a manner that promotes openness that further
            promotes an atmosphere of comfort and trust.
          </p>
          <h2>
            <span className={`${styles.brushFamily} ${styles.lgFont}`}>H</span>
            ealth
          </h2>
          <p>
            &mdash;Above all, we strive to give our residents top quality care
            to promote mental and physical stability in a warm caring
            atmosphere.
          </p>
          <h2>
            <span className={`${styles.brushFamily} ${styles.lgFont}`}>B</span>
            alance
          </h2>
          <p>
            &mdash;We endeavor for the perfect balance of security, privacy and
            companionship.
          </p>
          <h2>
            <span className={`${styles.brushFamily} ${styles.lgFont}`}>R</span>
            espect
          </h2>
          <p>
            -&mdash;Understanding the difficulties of aging, we focus on the
            individual’s cultural background and needs. We live by our motto
            that “We work in their home, they don’t live in our workplace”
          </p>
          <h2>
            <span className={`${styles.brushFamily} ${styles.lgFont}`}>O</span>
            pen Communication
          </h2>
          <p>
            &mdash; We welcome and encourage communication from our residents.
            We provide an open forum to voice thoughts, ideas and concerns
            whereas each individual will be heard.
          </p>
          <h2>
            <span className={`${styles.brushFamily} ${styles.lgFont}`}>O</span>
            pen Mindedness
          </h2>
          <p>
            &mdash; We remain receptive to new ideas. We value the experience,
            ideas and opinions of our residents and of our team. We encourage
            import feedback and continue to evaluate ourselves for the
            betterment of our residents.
          </p>
          <h2>
            <span className={`${styles.brushFamily} ${styles.lgFont}`}>K</span>
            indness
          </h2>
          <p>
            &mdash; Our kindness reflects who we are as a community and the
            passion for what we do.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
