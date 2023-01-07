import {
  AboutUsNumbers,
  Breadcrumbs,
  Footer,
  Header,
  History,
  OurLife,
  OurPartnerList,
  PrincipleList,
  SectionWrapper,
  TestimonialList,
  TitleSectionWrapper,
  WidthBox,
} from '@components';
import { useStore } from '@hooks';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import styles from './About.module.scss';

const About = () => {
  const t = useTranslations('Views.About');
  const headTitle = useMemo(() => `${t('HeadTitle')} | Ukrainian-IT.Family`, [t]);
  const crumbs = useMemo(() => [{ link: '/', text: t('Breadcrumbs.0') }, t('Breadcrumbs.1')], [t]);
  const {
    aboutUsNumbersData,
    historyData,
    ourLifeData,
    principlesData,
    testimonialsData,
    ourPartnersData,
  } = useStore();

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
          <Image src="/static/images/ukraine-map.svg" alt="ukraine map" width={874} height={583} />
        </TitleSectionWrapper>
      </WidthBox>

      {aboutUsNumbersData && (
        <WidthBox filled="light">
          <SectionWrapper name={t('AboutUsNumbersName')} titles={[t('AboutUsNumbersTitles')]}>
            <AboutUsNumbers aboutUsNumbersData={aboutUsNumbersData} />
          </SectionWrapper>
        </WidthBox>
      )}

      {historyData && (
        <WidthBox>
          <SectionWrapper name={t('HistoryName')} titles={[t('HistoryTitles')]}>
            <History historyData={historyData} />
          </SectionWrapper>
        </WidthBox>
      )}

      {ourLifeData && (
        <WidthBox filled="light">
          <SectionWrapper name={t('OurLifeName')} titles={[t('OurLifeTitles')]}>
            <OurLife ourLifeData={ourLifeData} />
          </SectionWrapper>
        </WidthBox>
      )}

      {principlesData && (
        <WidthBox>
          <SectionWrapper name={t('PrincipleListName')} titles={[t('PrincipleListTitles')]}>
            <PrincipleList principlesData={principlesData} />
          </SectionWrapper>
        </WidthBox>
      )}

      {testimonialsData && (
        <WidthBox>
          <SectionWrapper
            name={t('TestimonialListName')}
            titles={[t('TestimonialListTitles')]}
            link="/testimonials"
            linkText={t('TestimonialListLinkText')}
          >
            <TestimonialList testimonialsData={testimonialsData.slice(0, 3)} />
          </SectionWrapper>
        </WidthBox>
      )}

      {ourPartnersData && (
        <WidthBox filled="light">
          <SectionWrapper name={t('OurPartnerListName')} titles={[t('OurPartnerListTitles')]}>
            <OurPartnerList ourPartnersData={ourPartnersData} />
          </SectionWrapper>
        </WidthBox>
      )}

      <Footer />
    </div>
  );
};

export default memo(About);
