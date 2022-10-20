import Breadcrumbs from '@components/breadcrumbs';
import Footer from '@components/footer';
import Header from '@components/header';
import Layout from '@components/layout';
import TestimonialList from '@components/testimonials-list';
import TitleSectionWrapper from '@components/title-section-wrapper';
import { testimonialListData } from '@constants/index';
import styles from '@styles/pages/testimonials.module.scss';
import Head from 'next/head';
import { useMemo } from 'react';

const Testimonials = () => {
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'Testimonials'], []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Testimonials | Ukrainian-IT.Family</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <Layout>
        <Breadcrumbs crumbs={crumbs} centered />
      </Layout>

      <Layout>
        <TitleSectionWrapper
          title="Our partners say"
          description="Hear what company like yours say"
        >
          <TestimonialList data={testimonialListData} />
        </TitleSectionWrapper>
      </Layout>

      <Footer />
    </div>
  );
};

export default Testimonials;
