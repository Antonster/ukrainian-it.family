import Breadcrumbs from '@components/breadcrumbs';
import Footer from '@components/footer';
import Header from '@components/header';
import Layout from '@components/layout';
import PortfolioList from '@components/Portfolio-list';
import TitleSectionWrapper from '@components/title-section-wrapper';
import { portfolioListData } from '@constants/index';
import styles from '@styles/pages/portfolio.module.scss';
import Head from 'next/head';
import { useMemo } from 'react';

const Portfolio = () => {
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'Portfolio'], []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Ukrainian-IT.Family</title>
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
          <PortfolioList data={portfolioListData} />
        </TitleSectionWrapper>
      </Layout>

      <Footer />
    </div>
  );
};

export default Portfolio;
