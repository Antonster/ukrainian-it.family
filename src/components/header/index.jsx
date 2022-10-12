import Layout from '@components/layout';
import Popover from '@mui/material/Popover';
import styles from '@styles/components/header.module.scss';
import Link from 'next/link';

const Header = () => (
  <Layout>
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src="/static/images/logo-full.svg" alt="logo" />
        <div className={styles.header__languages}>
          <div>UA</div>
          <div>|</div>
          <div>EN</div>
        </div>
      </div>

      {/* <nav>
        <ul>
          <li>
            <div>Company</div>
          </li>
        </ul>
      </nav> */}
    </header>
  </Layout>
);

export default Header;
