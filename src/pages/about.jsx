import AboutUsNumbers from '@components/about-us-numbers';
import Breadcrumbs from '@components/breadcrumbs';
import Footer from '@components/footer';
import Header from '@components/header';
import History from '@components/history';
import Layout from '@components/layout';
import OurLife from '@components/our-life';
import OurPartnerList from '@components/our-partner-list';
import PrinciplesList from '@components/principles-list';
import SectionWrapper from '@components/section-wrapper';
import TestimonialList from '@components/testimonials-list';
import TitleSectionWrapper from '@components/title-section-wrapper';
import { testimonialListData } from '@constants/index';
import styles from '@styles/pages/about.module.scss';
import Head from 'next/head';
import { useMemo } from 'react';

const About = () => {
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'About us'], []);

  return (
    <div className={styles.container}>
      <Head>
        <title>About | Ukrainian-IT.Family</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <Layout>
        <Breadcrumbs crumbs={crumbs} centered />
      </Layout>

      <Layout small>
        <TitleSectionWrapper title="We are UKRAINIAN IT FAMILY" description="Lorem ipsum">
          <img className={styles.map} src="/static/images/ukraine-map.svg" alt="ukraine map" />
        </TitleSectionWrapper>
      </Layout>

      <Layout filled>
        <SectionWrapper name="About us" titles={['In numbers']}>
          <AboutUsNumbers />
        </SectionWrapper>
      </Layout>

      <Layout>
        <SectionWrapper name="Our history" titles={['How we became ourselves']}>
          <History />
        </SectionWrapper>
      </Layout>

      <Layout>
        <SectionWrapper name="Our life" titles={['Not only code']}>
          <OurLife />
        </SectionWrapper>
      </Layout>

      <Layout>
        <SectionWrapper name="Our values" titles={['Principles we follow']}>
          <PrinciplesList />
        </SectionWrapper>
      </Layout>

      <Layout>
        <SectionWrapper name="Testimonials" titles={['Our partners say']} link="/testimonials">
          <TestimonialList data={testimonialListData.slice(0, 3)} />
        </SectionWrapper>
      </Layout>

      <Layout filled>
        <SectionWrapper name="Our partners" titles={['We are trusted by']}>
          <OurPartnerList />
        </SectionWrapper>
      </Layout>

      <Footer />
    </div>
  );
};

export default About;
