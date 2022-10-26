import 'swiper/css';

import { ourLifeListData } from '@constants/index';
import styles from '@styles/components/our-life.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

const OurLife = () => (
  <div className={styles.container}>
    <Swiper className={styles.swiper} spaceBetween={8} slidesPerView={3} grabCursor>
      {ourLifeListData.map(({ id, images }) => {
        if (images.length === 2) {
          return (
            <SwiperSlide key={id}>
              <div className={styles.slide}>
                <Image src={images[0]} alt="our life" width={432} height={226} objectFit="cover" />

                <Image src={images[1]} alt="our life" width={432} height={226} objectFit="cover" />
              </div>
            </SwiperSlide>
          );
        }

        return (
          <SwiperSlide key={id}>
            <div className={styles.slide}>
              <Image src={images[0]} alt="our life" width={432} height={460} objectFit="cover" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
);

export default OurLife;
