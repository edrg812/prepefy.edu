// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css'; // Create this CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <Link href="mailto:info@csuglobal.edu" className={styles.topBarLink}>
            {/* Replace with your email icon */}
            <span className="icon">✉️</span> info@csuglobal.edu
          </Link>
          <Link href="tel:1-800-921-0172" className={styles.topBarLink}>
            {/* Replace with your phone icon */}
            <span className="icon">📞</span> 1-800-921-0172
          </Link>
          <Link href="/login" className={styles.topBarLink}>
            Login
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={styles.mainNav}>
        <div className={styles.mainNavContent}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <img src="/images/csu-global-logo.png" alt="CSU Global" className={styles.logo} />
          </Link>

          {/* Navigation Links */}
          <ul className={styles.navigationLinks}>
            <li className={styles.dropdown}>
              <Link href="/programs" className={styles.navLink}>
                Programs
              </Link>
              {/* Dropdown menu for Programs (fetch data from Django API) */}
              <ul className={styles.dropdownMenu}>
                <li><Link href="/programs/bachelors">Bachelor's</Link></li>
                <li><Link href="/programs/masters">Master's</Link></li>
                {/* ... more program categories fetched from API */}
              </ul>
            </li>
            <li className={styles.dropdown}>
              <Link href="/admissions" className={styles.navLink}>
                Admissions
              </Link>
              {/* Dropdown menu for Admissions */}
              <ul className={styles.dropdownMenu}>
                <li><Link href="/admissions/undergraduate">Undergraduate</Link></li>
                <li><Link href="/admissions/graduate">Graduate</Link></li>
                {/* ... more admissions links */}
              </ul>
            </li>
            <li><Link href="/cost" className={styles.navLink}>Cost</Link></li>
            <li className={styles.dropdown}>
              <Link href="/student-success" className={styles.navLink}>
                Student Success
              </Link>
              {/* Dropdown menu for Student Success */}
              <ul className={styles.dropdownMenu}>
                <li><Link href="/student-success/resources">Resources</Link></li>
                <li><Link href="/student-success/careers">Careers</Link></li>
                {/* ... more student success links */}
              </ul>
            </li>
            <li><Link href="/about" className={styles.navLink}>About</Link></li>
            <li><Link href="/news" className={styles.navLink}>News</Link></li>
          </ul>

          {/* Buttons and Search */}
          <div className={styles.navButtons}>
            <Link href="/request-info" className={styles.requestInfoButton}>
              REQUEST INFO
            </Link>
            <Link href="/apply-now" className={styles.applyNowButton}>
              APPLY NOW
            </Link>
            <button className={styles.searchButton}>
              {/* Replace with your search icon */}
              <span className="icon">🔍</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;