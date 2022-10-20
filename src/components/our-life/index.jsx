import 'swiper/css';

import { ourLifeListData } from '@constants/index';
import styles from '@styles/components/our-life.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

const OurLife = () => (
  <div className={styles.container}>
    <Swiper className={styles.swiper} spaceBetween={8} slidesPerView={3} grabCursor>
      {ourLifeListData.map(({ id, images }) => {
        if (images.length === 2) {
          return (
            <SwiperSlide key={id}>
              <div className={styles.slide}>
                <img
                  className={`${styles.slide__image} ${styles.small}`}
                  src={images[0]}
                  alt="our life"
                />
                <img
                  className={`${styles.slide__image} ${styles.small}`}
                  src={images[1]}
                  alt="our life"
                />
              </div>
            </SwiperSlide>
          );
        }

        return (
          <SwiperSlide key={id}>
            <div className={styles.slide}>
              <img
                className={`${styles.slide__image} ${styles.big}`}
                src={images[0]}
                alt="our life"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
);

export default OurLife;
