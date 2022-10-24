import Breadcrumbs from '@components/breadcrumbs';
import DropALine from '@components/drop-a-line';
import Footer from '@components/footer';
import Header from '@components/header';
import Layout from '@components/layout';
import SectionWrapper from '@components/section-wrapper';
import TitleSectionWrapper from '@components/title-section-wrapper';
import VacancyList from '@components/vacancy-list';
import styles from '@styles/pages/career.module.scss';
import Head from 'next/head';
import { useMemo } from 'react';

const Career = () => {
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'Career'], []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Career | Ukrainian-IT.Family</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <Layout>
        <Breadcrumbs crumbs={crumbs} centered />
      </Layout>

      <Layout small>
        <TitleSectionWrapper
          title="Join ukrainian IT Family"
          description="We celebrate Ukrainian IT talent and want to make it famous around the world. Join us!"
        >
          <VacancyList />
        </TitleSectionWrapper>
      </Layout>

      <Layout filled>
        <SectionWrapper question name="Drop a line" titles={['No suitable vacancy']}>
          <DropALine />
        </SectionWrapper>
      </Layout>

      <Footer />
    </div>
  );
};

export default Career;
