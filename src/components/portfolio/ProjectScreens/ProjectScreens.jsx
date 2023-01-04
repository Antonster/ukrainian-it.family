import 'swiper/css';

import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './ProjectScreens.module.scss';

const ProjectScreens = ({ imageList }) => (
  <div className={styles.container}>
    <Swiper className={styles.swiper} spaceBetween={8} slidesPerView="auto" grabCursor>
      {imageList.map(({ id, images }) => {
        if (images.length === 2) {
          return (
            <SwiperSlide key={id} className={styles['slide-wrapper-small']}>
              <div className={styles.slide}>
                <div className={styles.slide__image}>
                  <Image
                    src={images[0]}
                    alt="UI preview"
                    width={320}
                    height={226}
                    objectFit="cover"
                  />
                </div>

                <div className={styles.slide__image}>
                  <Image
                    src={images[1]}
                    alt="UI preview"
                    width={320}
                    height={226}
                    objectFit="cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        }

        return (
          <SwiperSlide key={id} className={styles['slide-wrapper-big']}>
            <div className={styles.slide}>
              <div className={styles.slide__image}>
                <Image
                  src={images[0]}
                  alt="UI preview"
                  width={640}
                  height={460}
                  objectFit="cover"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
);

ProjectScreens.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }),
  ),
};

export default memo(ProjectScreens);
