import classNames from 'classnames';

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './nav.module.scss';

const ITEMS = [
  {
    href: '/',
    text: 'Home',
  },
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
  // TODO: When using mouseclick, do not apply focus colors

  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {ITEMS.map((item) => {
          const linkClasses = classNames(styles.link, {
            [styles.link_active]: router.asPath === item.href,
          });
          return (
            <li className={styles.item} key={item.text}>
              <Link href={item.href}>
                <a className={linkClasses}>{item.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
