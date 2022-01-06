import classNames from 'classnames';
import Head from 'next/head';

import TechLogo from 'components/techLogo';

import styles from './about.module.scss';

const Skills = (props) => {
  return (
    <div className={styles.skillsContainer}>
      <div className={classNames(styles.skillBox, styles.professional)}>
        <h3>Professional</h3>
        <div className={styles.row}>
          <TechLogo height="120px" width="120px" technology="TWILIO" />
          <TechLogo height="120px" width="120px" technology="POSTGRES" />
          <TechLogo height="120px" width="120px" technology="NODE" />
        </div>
        <div className={styles.col}>
          <TechLogo height="120px" width="120px" technology="NEXT" />
          <TechLogo height="120px" width="120px" technology="CANVAS" />
        </div>
        {/* Python, Flask, Postgres, MySQL, BigQuery */}
      </div>
      <div className={classNames(styles.skillBox, styles.intersection)}>
        <h3>Intersection</h3>
        <TechLogo height="120px" width="120px" technology="REACT" />
        <TechLogo height="120px" width="120px" technology="REDUX" />
        <TechLogo height="120px" width="120px" technology="CSS3" />
        <TechLogo height="120px" width="120px" technology="SASS" />
      </div>
      <div className={classNames(styles.skillBox, styles.personal)}>
        <h3>Personal</h3>
        <TechLogo height="120px" width="120px" technology="JS" />
        <TechLogo height="120px" width="120px" technology="NODE" />
        <TechLogo height="120px" width="120px" technology="NEXT" />
        <TechLogo height="120px" width="120px" technology="CANVAS" />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <Head>
        <title>About | Helen Cho</title>
        <meta name="description" content="About Helen Cho." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <span className={styles.title}>Hello</span>
        <h1 className={styles.subTitle}>
          I&apos;m <span>Helen</span>, a software engineer from New York.
        </h1>
        <Skills />

        <p className={styles.subTitle}>
          When I&apos;m not obsessing over clean solutions or responsive
          designs, you can find me snowboarding in Colorado & Vermont, training
          my 9-month old Aussie, or chasing the next solar eclipse.
        </p>
        <div>
          <h2>Interested? Get in touch.</h2>
          <p>GitHub, LinkedIn, Medium</p>
        </div>
      </div>
    </>
  );
};

export default About;
