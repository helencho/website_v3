import Head from 'next/head';
import Image from 'next/image';

import ButtonLink from 'components/buttonLink';
import { PROJECTS } from 'constants/projects';
import { TECH_LOGO_MAP } from 'constants/technology';
import { snakeCase } from 'helpers/normalizers';

import styles from './projects.module.scss';

const TechLogo = ({ technology }) => {
  const logo = TECH_LOGO_MAP[technology];

  return (
    <div className={styles.logo} key={logo.alt}>
      <Image alt={logo.alt} height="50px" src={logo.src} width="50px" />
    </div>
  );
};

const Project = (props) => {
  const {
    title,
    subTitle,
    description,
    technologies,
    ctas,
    image: { alt, src },
  } = props;

  const titleSnakeCase = snakeCase(title);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.imageContainer}>
        <Image alt={alt} height="231px" src={src} width="366px" />
      </div>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <h3 className={styles.projectSubTitle}>{subTitle}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.techContainer}>
          {technologies.map((technology) => (
            <TechLogo
              key={`${titleSnakeCase}_tech_${technology.toLowerCase()}`}
              technology={technology}
            />
          ))}
        </div>
        {ctas.map((cta, index) => (
          <ButtonLink key={`${titleSnakeCase}_cta_${index}`} {...cta} />
        ))}
      </div>
    </div>
  );
};

const Projects = (props) => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Helen's hobby projects." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subTitle}>
          At the intersection of <span>time</span> and <span>inspiration</span>.
          Small passion/hobby projects.
        </p>
        {props.projects.map((project) => (
          <Project key={snakeCase(project.title)} {...project} />
        ))}
      </div>
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      projects: PROJECTS,
    },
  };
}

export default Projects;
