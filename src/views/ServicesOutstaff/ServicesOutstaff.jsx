import { Breadcrumbs, Footer, Header } from '@components/elements';
import { SectionWrapper, TitleSectionWrapper, WidthBox } from '@components/layouts';
import {
  DropALine,
  ExpertiseList,
  PortfolioList,
  ServiceProcess,
  WhyUs,
} from '@components/sections';
import { portfolioListData, serviceOutstaffProcessData } from '@constants';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import styles from './ServicesOutstaff.module.scss';

const ServicesOutstaff = () => {
  const t = useTranslations('Views.ServicesOutstaff');
  const router = useRouter();
  const headTitle = useMemo(() => `${t('HeadTitle')} | Ukrainian-IT.Family`, [t]);
  const crumbs = useMemo(
    () => [
      { link: '/', text: t('Breadcrumbs.0') },
      { link: '/services', text: t('Breadcrumbs.1') },
      t('Breadcrumbs.2'),
    ],
    [t],
  );

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

      <WidthBox>
        <SectionWrapper name={t('ServiceProcessName')} titles={[t('ServiceProcessTitles')]}>
          <ServiceProcess data={serviceOutstaffProcessData[router.locale]} />
        </SectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper name={t('DropALineName')} titles={[t('DropALineTitles')]}>
          <DropALine
            descriptionField
            fileLabel={t('DropALineFileLabel')}
            formDescription={t('DropALineFormDescription')}
            formLabel={t('DropALineFormLabel')}
          />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper name={t('WhyUsName')} titles={[t('WhyUsTitles')]}>
          <WhyUs />
        </SectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper
          name={t('ExpertiseListName')}
          titles={[t('ExpertiseListTitles.0'), t('ExpertiseListTitles.1')]}
        >
          <ExpertiseList />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper big name={t('PortfolioName')} titles={[t('PortfolioTitles')]}>
          <PortfolioList data={portfolioListData[router.locale].slice(0, 4)} moreButton />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};

export default memo(ServicesOutstaff);
