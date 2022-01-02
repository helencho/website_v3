import classNames from 'classnames';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { snakeCase } from 'helpers/normalizers';

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

const NavLink = (props) => {
  const { asPath, href, text } = props;
  const linkClasses = classNames({
    [styles.link]: true,
    [styles.link_active]: asPath === href,
  });

  return (
    <li className={styles.item}>
      <Link href={href}>
        <a className={linkClasses}>{createLetterSpans(text)}</a>
      </Link>
    </li>
  );
};

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <NavLink
            asPath={router.asPath}
            key={snakeCase(item.text)}
            {...item}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
