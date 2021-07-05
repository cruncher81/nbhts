import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch, FaCaretDown } from 'react-icons/fa';
import Link from 'next/link';
import Logo from '../Logo';
import styles from '../Navigation/MainNavigation.module.css';

const MainNavigaion = (props) => {
  const { title } = props;
  const sections = [
    // { title: 'Home', url: '/' },
    // { title: 'About', url: '/about' },
    // { title: 'The Team', url: '/team' },
    // { title: 'News', url: '/news' },
    // { title: 'Our Blog', url: '/blog' },
    { title: 'Admissions', url: '/admissions' },
    { title: 'Contact Us', url: '/contact-us' },
    { title: 'Covid 19', url: '/covid-19' },
    { title: 'Happenings', url: '/happenings' },
    { title: 'Testimonials', url: '/testimonials' },
  ];
  return (
    <React.Fragment>
      <div className={styles.navigation}>
        <div className={`container ${styles.container}`}>
          <Logo src='/images/nbwelcome.jpg' width={50} height={50} />
          <nav className={styles.navbar}>
            <div>
              <Link href='/'>Home</Link>
            </div>

            <div className={styles.dropdown}>
              <Link href='/about'>About Us</Link>

              <div className={styles.dropdownContent}>
                <Link href='/about'>About Us</Link>
                <Link href='/team'>Meet the team</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link href='/news/news'>News</Link>

              <div className={styles.dropdownContent}>
                <Link href='/news/news'>News</Link>
                <Link href='/blog/blog'>Our blog</Link>
              </div>
            </div>

            <div>
              {sections.map((section, key) => (
                <Link key={section.title} href={section.url}>
                  {section.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

MainNavigaion.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default MainNavigaion;
