import Breadcrumbs from '@components/breadcrumbs';
import DropALine from '@components/drop-a-line';
import Footer from '@components/footer';
import Header from '@components/header';
import Layout from '@components/layout';
import SectionWrapper from '@components/section-wrapper';
import TeamList from '@components/team-list';
import TitleSectionWrapper from '@components/title-section-wrapper';
import VacancyList from '@components/vacancy-list';
import WhyUs from '@components/why-us';
import styles from '@styles/pages/team.module.scss';
import Head from 'next/head';
import { useMemo } from 'react';

const Team = () => {
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'Our Team'], []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Our Team | Ukrainian-IT.Family</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <Layout>
        <Breadcrumbs crumbs={crumbs} centered />
      </Layout>

      <Layout>
        <TitleSectionWrapper
          title="Ukrainian talent in one place"
          description="Ukrainian IT talent appreciation team"
        >
          <TeamList />
        </TitleSectionWrapper>
      </Layout>

      <Layout>
        <SectionWrapper name="Why us" titles={['Why us']}>
          <WhyUs />
        </SectionWrapper>
      </Layout>

      <Layout filled>
        <SectionWrapper name="Drop a line" titles={['Credit us your project']}>
          <DropALine />
        </SectionWrapper>
      </Layout>

      <Footer />
    </div>
  );
};

export default Team;
