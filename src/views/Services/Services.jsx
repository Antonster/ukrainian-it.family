import { Breadcrumbs, Footer, Header } from '@components/elements';
import { SectionWrapper, TitleSectionWrapper, WidthBox } from '@components/layouts';
import { ExpertiseList, ServiceList } from '@components/sections';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import styles from './Services.module.scss';

export const Services = () => {
  const t = useTranslations('Views.Services');
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
          <ServiceList />
        </TitleSectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper
          name={t('ExpertiseListName')}
          titles={[t('ExpertiseListTitles.0'), t('ExpertiseListTitles.1')]}
        >
          <ExpertiseList />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
