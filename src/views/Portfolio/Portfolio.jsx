import { Breadcrumbs, Footer, Header } from '@components/elements';
import { TitleSectionWrapper, WidthBox } from '@components/layouts';
import { PortfolioList } from '@components/sections';
import { portfolioListData } from '@constants';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  const t = useTranslations('Views.Portfolio');
  const router = useRouter();
  const headTitle = useMemo(() => `${t('HeadTitle')} | Ukrainian-IT.Family`, [t]);
  const crumbs = useMemo(() => [{ link: '/', text: t('Breadcrumbs.0') }, t('Breadcrumbs.1')], [t]);

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
        <TitleSectionWrapper title={t('PageTitle')} description={t('PageDescription')}>
          <PortfolioList data={portfolioListData[router.locale]} />
        </TitleSectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
