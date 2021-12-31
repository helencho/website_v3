import Nav from './nav';

import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={styles.main}>{children}</main>
    </>
  );
}
