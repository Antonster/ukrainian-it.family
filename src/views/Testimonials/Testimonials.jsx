import { Breadcrumbs, Footer, Header } from '@components/elements';
import { TitleSectionWrapper, WidthBox } from '@components/layouts';
import { TestimonialList } from '@components/sections';
import { testimonialListData } from '@constants';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import styles from './Testimonials.module.scss';

export const Testimonials = () => {
  const router = useRouter();
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
          <TestimonialList data={testimonialListData[router.locale]} />
        </TitleSectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
