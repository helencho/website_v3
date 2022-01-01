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

const VOWELS = 'aeiou';

const Nav = () => {
  const router = useRouter();

  const createLetterSpans = (word) =>
    word.split('').map((letter, index) => {
      const key = `${word}_${index}_${letter}`;
      const isVowel = VOWELS.includes(letter.toLowerCase());
      return (
        <span
          className={classNames({
            [styles.letter_highlight]: isVowel,
          })}
          key={key}
        >
          {letter}
        </span>
      );
    }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {ITEMS.map((item, index) => {
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
