import 'swiper/css';

import { ourLifeListData } from '@data';
import { useMediaQuery } from '@hooks';
import Image from 'next/image';
import { memo, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './OurLife.module.scss';

const OurLife = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');
  const isMobileScreen = useMediaQuery('(max-width: 480px)');

  const slidesPerView = useMemo(() => {
    if (isMobileScreen) return 1.2;
    if (isSmallScreen) return 2.2;
    return 3;
  }, [isMobileScreen, isSmallScreen]);

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        spaceBetween={isMobileScreen ? 4 : 8}
        slidesPerView={slidesPerView}
        grabCursor
      >
        {ourLifeListData.map(({ id, images }) => {
          if (images.length === 2) {
            return (
              <SwiperSlide key={id}>
                <div className={styles.slide}>
                  <div className={styles.slide__image}>
                    <Image
                      src={images[0]}
                      alt="our life"
                      width={432}
                      height={226}
                      objectFit="cover"
                    />
                  </div>

                  <div className={styles.slide__image}>
                    <Image
                      src={images[1]}
                      alt="our life"
                      width={432}
                      height={226}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          }

          return (
            <SwiperSlide key={id}>
              <div className={styles.slide}>
                <div className={styles.slide__image}>
                  <Image
                    src={images[0]}
                    alt="our life"
                    width={432}
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
};

export default memo(OurLife);
