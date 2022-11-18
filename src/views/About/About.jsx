import { Breadcrumbs } from '@components/elements';
import { SectionWrapper, TitleSectionWrapper, WidthBox } from '@components/layouts';
import {
  AboutUsNumbers,
  Footer,
  Header,
  History,
  OurLife,
  OurPartnerList,
  PrincipleList,
  TestimonialList,
} from '@components/sections';
import { testimonialListData } from '@constants';
import Head from 'next/head';
import Image from 'next/image';
import { useMemo } from 'react';

import styles from './About.module.scss';

export const About = () => {
  const headTitle = useMemo(() => `About | Ukrainian-IT.Family`, []);
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'About us'], []);

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
        <TitleSectionWrapper title="We are UKRAINIAN IT FAMILY" description="Lorem ipsum">
          <Image src="/static/images/ukraine-map.svg" alt="ukraine map" width={874} height={583} />
        </TitleSectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper name="About us" titles={['In numbers']}>
          <AboutUsNumbers />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper name="Our history" titles={['How we became ourselves']}>
          <History />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper name="Our life" titles={['Not only code']}>
          <OurLife />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper name="Our values" titles={['Principles we follow']}>
          <PrincipleList />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper name="Testimonials" titles={['Our partners say']} link="/testimonials">
          <TestimonialList data={testimonialListData.slice(0, 3)} />
        </SectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper name="Our partners" titles={['We are trusted by']}>
          <OurPartnerList />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
