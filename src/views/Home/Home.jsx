import {
  AboutUsNumbers,
  ExpertiseList,
  Footer,
  Header,
  MainSection,
  PortfolioList,
  SectionWrapper,
  ServiceList,
  TestimonialList,
  WidthBox,
} from '@components';
import { useMediaQuery, useOnScreen, useStore } from '@hooks';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { memo, useMemo, useRef } from 'react';

import styles from './Home.module.scss';

const Home = () => {
  const t = useTranslations('Views.Home');
  const headTitle = useMemo(() => `${t('HeadTitle')} | Ukrainian-IT.Family`, [t]);
  const sectionHeaderRef = useRef();
  const sectionHeaderVisible = useOnScreen(sectionHeaderRef, '30px');
  const isTabletScreen = useMediaQuery('(max-width: 768px)');
  const { servicesData, expertiseData, portfolioData, aboutUsNumbersData, testimonialsData } =
    useStore();

  return (
    <div className={styles.container}>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/static/images/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {(!sectionHeaderVisible || isTabletScreen) && <Header fixed />}

      <WidthBox>
        <MainSection sectionHeaderRef={sectionHeaderRef} />
      </WidthBox>

      {servicesData && (
        <WidthBox>
          <SectionWrapper big name={t('ServicesName')} titles={[t('ServicesTitles')]}>
            <ServiceList servicesData={servicesData} />
          </SectionWrapper>
        </WidthBox>
      )}

      {expertiseData && (
        <WidthBox filled="light">
          <SectionWrapper
            name={t('ExpertiseName')}
            titles={[t('ExpertiseTitles.0'), t('ExpertiseTitles.1')]}
            description={t('ExpertiseDescription')}
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

      {aboutUsNumbersData && (
        <WidthBox filled="light">
          <SectionWrapper
            name={t('AboutUsNumbersName')}
            titles={[t('AboutUsNumbersTitles')]}
            link="/about"
            linkText={t('AboutUsNumbersLinkText')}
          >
            <AboutUsNumbers aboutUsNumbersData={aboutUsNumbersData} />
          </SectionWrapper>
        </WidthBox>
      )}

      {testimonialsData && (
        <WidthBox>
          <SectionWrapper
            big
            name={t('TestimonialListName')}
            titles={[t('TestimonialListTitles')]}
            link="/testimonials"
            linkText={t('TestimonialListLinkText')}
          >
            <TestimonialList testimonialsData={testimonialsData.slice(0, 3)} />
          </SectionWrapper>
        </WidthBox>
      )}

      <Footer />
    </div>
  );
};

export default memo(Home);
