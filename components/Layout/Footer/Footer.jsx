import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaLink } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    // Footer
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h1>Contact Us</h1>
      </div>
      <div className={`${styles.container} ${styles.flex}`}>
        <div>
          <p>
            <FaPhoneAlt className={styles.icon} />
            (315) 253-2755
          </p>
        </div>
        <div>
          <p>
            <FaMapMarkerAlt className={styles.icon} />
            170 Murray St. Auburn, NY 13021
          </p>
        </div>
        <div>
          <p>
            <FaEnvelope className={styles.icon} />
            marketing@nbhts.com
          </p>
        </div>
        <div>
          <a href='contact-us'>
            <FaLink className={styles.icon} />
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
