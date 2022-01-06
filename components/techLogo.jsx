import Image from 'next/image';

import { TECH_LOGO_MAP } from 'constants/technology';

const TechLogo = ({ className, height, width, technology }) => {
  const logo = TECH_LOGO_MAP[technology];

  return (
    <div className={className} key={logo.alt}>
      <Image alt={logo.alt} height={height} src={logo.src} width={width} />
    </div>
  );
};

export default TechLogo;
