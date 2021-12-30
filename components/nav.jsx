import Link from 'next/link';

import styles from './nav.module.scss';

const Nav = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
