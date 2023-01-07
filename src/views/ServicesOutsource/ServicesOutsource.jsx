import {
  Breadcrumbs,
  DropALine,
  ExpertiseList,
  Footer,
  Header,
  PortfolioList,
  SectionWrapper,
  ServiceProcess,
  TitleSectionWrapper,
  WhyUs,
  WidthBox,
} from '@components';
import { useStore } from '@hooks';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import styles from './ServicesOutsource.module.scss';

const ServicesOutsource = () => {
  const t = useTranslations('Views.ServicesOutsource');
  const headTitle = useMemo(() => `${t('HeadTitle')} | Ukrainian-IT.Family`, [t]);
  const crumbs = useMemo(
    () => [
      { link: '/', text: t('Breadcrumbs.0') },
      { link: '/services', text: t('Breadcrumbs.1') },
      t('Breadcrumbs.2'),
    ],
    [t],
  );
  const { serviceOutsourceProcessData, whyUsData, expertiseData, portfolioData } = useStore();

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
        <TitleSectionWrapper title={t('PageTitle')} description={t('PageDescription')} small />
      </WidthBox>

      {serviceOutsourceProcessData && (
        <WidthBox>
          <SectionWrapper name={t('ServiceProcessName')} titles={[t('ServiceProcessTitles')]}>
            <ServiceProcess serviceProcessData={serviceOutsourceProcessData} />
          </SectionWrapper>
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

      {whyUsData && (
        <WidthBox>
          <SectionWrapper name={t('WhyUsName')} titles={[t('WhyUsTitles')]}>
            <WhyUs whyUsData={whyUsData} />
          </SectionWrapper>
        </WidthBox>
      )}

      {expertiseData && (
        <WidthBox filled="light">
          <SectionWrapper
            name={t('ExpertiseListName')}
            titles={[t('ExpertiseListTitles.0'), t('ExpertiseListTitles.1')]}
          >
            <ExpertiseList expertiseData={expertiseData} />
          </SectionWrapper>
        </WidthBox>
      )}

      {portfolioData && (
        <WidthBox>
          <SectionWrapper big name={t('PortfolioName')} titles={[t('PortfolioTitles')]}>
            <PortfolioList portfolioData={portfolioData.slice(0, 4)} moreButton />
          </SectionWrapper>
        </WidthBox>
      )}

      <Footer />
    </div>
  );
};

export default memo(ServicesOutsource);
