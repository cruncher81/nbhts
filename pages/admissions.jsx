import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import styles from '../styles/admissions.module.css';

export default function AdmissionsPage() {
  return (
    <Layout>
      <section className={styles.admissionsMain}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles.wrapper}>
            <h1 className={styles.bBold}>
              Assisted Living Program vs. Adult Care Facility
            </h1>
            <p>
              Northbrook Heights offers two distinct levels of care to help you
              or your loved one gracefully transition through the aging process
              without having to find a new home.
            </p>
            <p>
              Our Adult Care Facility (ACF) aims to provide support while
              maintaining your independence. Residents of the ACF program are
              able to walk, transfer and use the bathroom on their own. They are
              of sound mind and handle their personal care independently.
              Although residents enjoy their independence Northbrook Heights
              still aids with managing their medications, scheduling, and
              maintaining doctor’s visits, meal preparation and maintenance/home
              repair.
            </p>
            <p>
              Our Assisted Living Program (ALP) takes the next steps in
              supporting you or your loved during this time in life. ALP offers
              all the amenities of our ACF program, but also offers assistance
              with insulin, oxygen, and altered consistency diets. Northbrook
              offers reminders and assistance with personal care to our ALP
              members.
            </p>
            <p>
              Both programs offer a 24-hour supervised facility with call bells
              in every room, meaning that regardless of the program you choose
              someone will always be seconds away to offer the support you need.
            </p>
          </div>

          <div className={styles.docListContainer}>
            <div className={styles.docList}>
              <h3>Download key documents</h3>
              <div>
                <Link href='/docs/application.pdf'>
                  <a>Application</a>
                </Link>
              </div>

              <div>
                <Link href='docs/medical-evaluation-form.pdf'>
                  <a>Medical Evaluation Form</a>
                </Link>
              </div>

              <div>
                <Link href='docs/nys-doh-mh-evaluation.pdf'>
                  <a>Mental Health Evaluation Form</a>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.page2}>
            <Image
              src='/images/alpvsacfchart.jpg'
              alt=''
              width={667}
              height={865}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
