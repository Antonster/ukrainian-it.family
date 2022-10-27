import Breadcrumbs from '@components/breadcrumbs';
import DropALine from '@components/drop-a-line';
import ExpertiseList from '@components/expertise-list';
import Footer from '@components/footer';
import Header from '@components/header';
import Layout from '@components/layout';
import PortfolioList from '@components/portfolio-list';
import SectionWrapper from '@components/section-wrapper';
import ServiceProcess from '@components/service-process';
import TitleSectionWrapper from '@components/title-section-wrapper';
import WhyUs from '@components/why-us';
import { portfolioListData, serviceOutstaffProcessData } from '@constants/index';
import styles from '@styles/pages/team.module.scss';
import Head from 'next/head';
import { useMemo } from 'react';

const Outstaff = () => {
  const crumbs = useMemo(
    () => [{ link: '/', text: 'Homepage' }, { link: '/services', text: 'Services' }, 'Outstaff'],
    [],
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Outstaff | Ukrainian-IT.Family</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <Layout>
        <Breadcrumbs crumbs={crumbs} centered />
      </Layout>

      <Layout>
        <TitleSectionWrapper
          title="Find a ukrainian soul to fulfil your project"
          description="Need a responsible and proactive team member? Outstaff from us."
          small
        />
      </Layout>

      <Layout>
        <SectionWrapper name="Process" titles={['How outstaff works']}>
          <ServiceProcess data={serviceOutstaffProcessData} />
        </SectionWrapper>
      </Layout>

      <Layout filled>
        <SectionWrapper name="Drop a line" titles={['Credit us your project']}>
          <DropALine />
        </SectionWrapper>
      </Layout>

      <Layout>
        <SectionWrapper name="Why us" titles={['Why us']}>
          <WhyUs />
        </SectionWrapper>
      </Layout>

      <Layout filled>
        <SectionWrapper name="Expertise" titles={['You have an idea', 'We have a solution']}>
          <ExpertiseList />
        </SectionWrapper>
      </Layout>

      <Layout>
        <SectionWrapper big name="Case studies" titles={['Portfolio']}>
          <PortfolioList data={portfolioListData.slice(0, 4)} moreButton />
        </SectionWrapper>
      </Layout>

      <Footer />
    </div>
  );
};

export default Outstaff;
