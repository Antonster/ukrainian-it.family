import Breadcrumbs from '@components/breadcrumbs';
import ExpertiseList from '@components/expertise-list';
import Footer from '@components/footer';
import Header from '@components/header';
import Layout from '@components/layout';
import SectionWrapper from '@components/section-wrapper';
import ServiceList from '@components/service-list';
import TitleSectionWrapper from '@components/title-section-wrapper';
import styles from '@styles/pages/services.module.scss';
import Head from 'next/head';
import { useMemo } from 'react';

const Services = () => {
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'services'], []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Services | Ukrainian-IT.Family</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <Layout>
        <Breadcrumbs crumbs={crumbs} centered />
      </Layout>

      <Layout>
        <TitleSectionWrapper
          title="This is what we do best"
          description="See how we can become partners"
        >
          <ServiceList />
        </TitleSectionWrapper>
      </Layout>

      <Layout filled>
        <SectionWrapper name="Expertise" titles={['You have an idea', 'We have a solution']}>
          <ExpertiseList />
        </SectionWrapper>
      </Layout>

      <Footer />
    </div>
  );
};

export default Services;
