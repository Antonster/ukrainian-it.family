import { Breadcrumbs, Footer, Header } from '@components/elements';
import { TitleSectionWrapper, WidthBox } from '@components/layouts';
import { PortfolioList } from '@components/sections';
import { portfolioListData } from '@constants';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  const router = useRouter();
  const headTitle = useMemo(() => `Case Studies | Ukrainian-IT.Family`, []);
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'Case Studies'], []);

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
        <TitleSectionWrapper title="Our case studies" description="Projects we have worked on">
          <PortfolioList data={portfolioListData[router.locale]} />
        </TitleSectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
