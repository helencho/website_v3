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

  const createLetterSpans = (word) => {
    // Randomly choose a letter a highlight
    const highightIndex = Math.floor(Math.random() * word.length);
    return word.split('').map(
      (letter, index) => (
        <span
          className={classNames({
            [styles.letter_highlight]: highightIndex === index,
          })}
          key={`${word}_${index}_${letter}`}
        >
          {letter}
        </span>
      ),
      [],
    );
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {ITEMS.map((item) => {
          const linkClasses = classNames({
            [styles.link]: true,
            [styles.link_active]: router.asPath === item.href,
          });

          return (
            <li className={styles.item} key={item.text}>
              <Link href={item.href}>
                <a className={linkClasses}>{createLetterSpans(item.text)}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
