import { testimonialListData } from '@constants';
import { Breadcrumbs } from '@elements';
import { TitleSectionWrapper, WidthBox } from '@layouts';
import { Footer, Header, TestimonialList } from '@modules';
import Head from 'next/head';
import { useMemo } from 'react';

import styles from './Testimonials.module.scss';

export const Testimonials = () => {
  const headTitle = useMemo(() => `Testimonials | Ukrainian-IT.Family`, []);
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'Testimonials'], []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <WidthBox>
        <Breadcrumbs crumbs={crumbs} centered />
      </WidthBox>

      <WidthBox>
        <TitleSectionWrapper
          title="Our partners say"
          description="Hear what company like yours say"
        >
          <TestimonialList data={testimonialListData} />
        </TitleSectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
