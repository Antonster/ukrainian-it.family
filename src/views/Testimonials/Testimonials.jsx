import { Breadcrumbs, Footer, Header } from '@components/elements';
import { SectionWrapper, TitleSectionWrapper, WidthBox } from '@components/layouts';
import { DropALine, TestimonialList } from '@components/sections';
import { testimonialListData } from '@data';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const t = useTranslations('Views.Testimonials');
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
          <TestimonialList data={testimonialListData[router.locale]} />
        </TitleSectionWrapper>
      </WidthBox>

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

export default memo(Testimonials);
