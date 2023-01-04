import {
  Breadcrumbs,
  DropALine,
  Footer,
  Header,
  SectionWrapper,
  TitleSectionWrapper,
  VacancyList,
  WidthBox,
} from '@components';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import styles from './Career.module.scss';

const Career = () => {
  const t = useTranslations('Views.Career');
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

      <WidthBox small>
        <TitleSectionWrapper title={t('PageTitle')} description={t('PageDescription')}>
          <VacancyList />
        </TitleSectionWrapper>
      </WidthBox>

      <WidthBox filled="light">
        <SectionWrapper question name={t('DropALineName')} titles={[t('DropALineTitles')]}>
          <DropALine
            fileLabel={t('DropALineFileLabel')}
            formLabel={t('DropALineFormLabel')}
            linkField
          />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};

export default memo(Career);
