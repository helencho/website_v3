import classNames from 'classnames';

import Link from 'next/link';

import styles from './nav.module.scss';

const ITEMS = [
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/projects',
    text: 'Projects',
  },
  {
    href: '/gallery',
    text: 'Gallery',
  },
];

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={classNames(styles.link, styles.link_home)}>Home</a>
      </Link>
      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <li className={styles.item} key={item.text}>
            <Link href={item.href}>
              <a className={styles.link}>{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
