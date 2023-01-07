import {
  Breadcrumbs,
  DropALine,
  Footer,
  Header,
  PortfolioList,
  SectionWrapper,
  TitleSectionWrapper,
  WidthBox,
} from '@components';
import { useStore } from '@hooks';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import styles from './Portfolio.module.scss';

const Portfolio = () => {
  const t = useTranslations('Views.Portfolio');
  const headTitle = useMemo(() => `${t('HeadTitle')} | Ukrainian-IT.Family`, [t]);
  const crumbs = useMemo(() => [{ link: '/', text: t('Breadcrumbs.0') }, t('Breadcrumbs.1')], [t]);
  const { portfolioData } = useStore();

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

      {portfolioData && (
        <WidthBox>
          <TitleSectionWrapper title={t('PageTitle')} description={t('PageDescription')}>
            <PortfolioList portfolioData={portfolioData} />
          </TitleSectionWrapper>
        </WidthBox>
      )}

      <WidthBox filled="light">
        <SectionWrapper name={t('DropALineName')} titles={[t('DropALineTitles')]}>
          <DropALine
            descriptionField
            fileLabel={t('DropALineFileLabel')}
            formDescription={t('DropALineFormDescription')}
            formLabel={t('DropALineFormLabel')}
          />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};

export default memo(Portfolio);
