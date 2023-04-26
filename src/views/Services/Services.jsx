import {
  Breadcrumbs,
  ExpertiseList,
  Footer,
  Header,
  SectionWrapper,
  ServiceList,
  TitleSectionWrapper,
  WidthBox,
} from '@components';
import { useStore } from '@hooks';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import styles from './Services.module.scss';

const Services = () => {
  const t = useTranslations('Views.Services');
  const headTitle = useMemo(() => `${t('HeadTitle')} | Ukrainian-IT.Family`, [t]);
  const crumbs = useMemo(() => [{ link: '/', text: t('Breadcrumbs.0') }, t('Breadcrumbs.1')], [t]);
  const { servicesData, expertiseData } = useStore();

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

      {servicesData && (
        <WidthBox>
          <TitleSectionWrapper title={t('PageTitle')} description={t('PageDescription')}>
            <ServiceList servicesData={servicesData} />
          </TitleSectionWrapper>
        </WidthBox>
      )}

      {expertiseData && (
        <WidthBox filled="light">
          <SectionWrapper
            name={t('ExpertiseListName')}
            titles={[t('ExpertiseListTitles.0'), t('ExpertiseListTitles.1')]}
            description={t('ExpertiseDescription')}
          >
            <ExpertiseList expertiseData={expertiseData} />
          </SectionWrapper>
        </WidthBox>
      )}

      <Footer />
    </div>
  );
};

export default memo(Services);
