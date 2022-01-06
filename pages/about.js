import classNames from 'classnames';
import Head from 'next/head';

import TechLogo from 'components/techLogo';
import { TECH } from 'constants/technology';

import styles from './about.module.scss';

const ABOUT = {
  skills: {
    professional: {
      row: [TECH.PYTHON, TECH.FLASK, TECH.GRPC],
      col: [TECH.MYSQL, TECH.POSTGRES],
    },
    intersection: [TECH.REACT, TECH.REDUX, TECH.CSS3, TECH.SASS],
    personal: [TECH.JS, TECH.NODE, TECH.NEXT, TECH.CANVAS],
  },
  title: 'About | Helen',
  description: 'About Helen Cho.',
};

const Skills = (props) => {
  const { skills: { professional, intersection, personal } = {} } = props;

  return (
    <div className={styles.skillsContainer}>
      <div className={classNames(styles.skillBox, styles.professional)}>
        <h3>Professional</h3>
        <div className={styles.row}>
          {professional.row.map((logo) => (
            <TechLogo
              height="120px"
              key={logo}
              width="120px"
              technology={logo}
            />
          ))}
        </div>
        <div className={styles.col}>
          {professional.col.map((logo) => (
            <TechLogo
              height="120px"
              key={logo}
              width="120px"
              technology={logo}
            />
          ))}
        </div>
      </div>
      <div className={classNames(styles.skillBox, styles.personal)}>
        <h3>Personal</h3>
        {personal.map((logo) => (
          <TechLogo height="120px" key={logo} width="120px" technology={logo} />
        ))}
      </div>
      <div className={classNames(styles.skillBox, styles.intersection)}>
        <h3>Intersection</h3>
        {intersection.map((logo) => (
          <TechLogo height="120px" key={logo} width="120px" technology={logo} />
        ))}
      </div>
    </div>
  );
};

const About = (props) => {
  const { skills, title, description } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <span className={styles.title}>Hello</span>
        <h1 className={styles.subTitle}>
          I&apos;m <span>Helen</span>, a software engineer from New York.
        </h1>
        <Skills skills={skills} />

        <p className={styles.subTitle}>
          When I&apos;m not obsessing over clean solutions or responsive
          designs, you can find me <span>snowboarding</span> in Colorado &
          Vermont, <span>training</span> my 9-month old Aussie, or{' '}
          <span>chasing</span> the next solar eclipse.
        </p>
        <div>
          <h2>Interested? Get in touch.</h2>
          <p>GitHub, LinkedIn, Medium</p>
        </div>
      </div>
    </>
  );
};

export function getStaticProps() {
  return {
    props: ABOUT,
  };
}

export default About;
