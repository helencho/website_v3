import styles from './buttonLink.module.scss';

// TODO: Primary, secondary button link types
const ButtonLink = (props) => {
  const { text, href } = props;
  return (
    <a className={styles.buttonLink} href={href}>
      {text}
    </a>
  );
};

export default ButtonLink;
