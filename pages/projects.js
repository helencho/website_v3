import Head from 'next/head';
import Image from 'next/image';

import ButtonLink from 'components/buttonLink';
import { PROJECTS } from 'constants/projects';
import { TECH_LOGO_MAP } from 'constants/technology';

import styles from './projects.module.scss';

const Project = (props) => {
  const {
    title,
    subTitle,
    description,
    technologies,
    ctas,
    image: { alt, src },
  } = props;

  return (
    <div className={styles.projectContainer}>
      <div className={styles.imageContainer}>
        <Image
          // loader={myLoader}
          src={src}
          alt={alt}
          width="380px"
          height="280px"
        />
      </div>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <h3 className={styles.projectSubTitle}>{subTitle}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.techContainer}>
          {technologies.map((technology) => {
            const logo = TECH_LOGO_MAP[technology];
            return (
              <div className={styles.logo} key={logo.alt}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width="50px"
                  height="50px"
                />
              </div>
            );
          })}
        </div>
        {ctas.map((cta, index) => (
          <ButtonLink key={`${title}_cta_${index}`} {...cta} />
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
          <Project key={project.title} {...project} />
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
