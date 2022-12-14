import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './ProjectPreview.module.scss';

const ProjectPreview = ({ image }) => (
  <div className={styles['project-preview']}>
    <div className={styles['project-preview__container']}>
      <Image
        className={styles['project-preview__image']}
        src={image}
        width={810}
        height={506}
        objectFit="cover"
        objectPosition="center"
        alt="macbook preview"
      />
    </div>
  </div>
);

ProjectPreview.propTypes = {
  image: PropTypes.string.isRequired,
};

export default memo(ProjectPreview);
