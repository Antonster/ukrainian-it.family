import { Breadcrumbs, Footer, Header } from '@components/elements';
import { SectionWrapper, TitleSectionWrapper, WidthBox } from '@components/layouts';
import {
  AboutUsNumbers,
  History,
  OurLife,
  OurPartnerList,
  PrincipleList,
  TestimonialList,
} from '@components/sections';
import { testimonialListData } from '@data';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import styles from './About.module.scss';

const About = () => {
  const t = useTranslations('Views.About');
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

      <WidthBox small>
        <TitleSectionWrapper title={t('PageTitle')} description={t('PageDescription')}>
          <Image src="/static/images/ukraine-map.svg" alt="ukraine map" width={874} height={583} />
        </TitleSectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper name={t('AboutUsNumbersName')} titles={[t('AboutUsNumbersTitles')]}>
          <AboutUsNumbers />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper name={t('HistoryName')} titles={[t('HistoryTitles')]}>
          <History />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper name={t('OurLifeName')} titles={[t('OurLifeTitles')]}>
          <OurLife />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper name={t('PrincipleListName')} titles={[t('PrincipleListTitles')]}>
          <PrincipleList />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper
          name={t('TestimonialListName')}
          titles={[t('TestimonialListTitles')]}
          link="/testimonials"
          linkText={t('TestimonialListLinkText')}
        >
          <TestimonialList data={testimonialListData[router.locale].slice(0, 3)} />
        </SectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper name={t('OurPartnerListName')} titles={[t('OurPartnerListTitles')]}>
          <OurPartnerList />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};

export default memo(About);
