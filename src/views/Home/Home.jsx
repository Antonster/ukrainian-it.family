import { SectionWrapper, WidthBox } from '@components/layouts';
import {
  AboutUsNumbers,
  ExpertiseList,
  Footer,
  Header,
  MainSection,
  PortfolioList,
  ServiceList,
  TestimonialList,
} from '@components/sections';
import { portfolioListData, testimonialListData } from '@constants';
import { useOnScreen } from '@hooks';
import Head from 'next/head';
import { useMemo, useRef } from 'react';

import styles from './Home.module.scss';

export const Home = () => {
  const headTitle = useMemo(() => `Home | Ukrainian-IT.Family`, []);
  const sectionHeaderRef = useRef();
  const sectionHeaderVisible = useOnScreen(sectionHeaderRef, '30px');

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

      {!sectionHeaderVisible && <Header fixed />}

      <WidthBox>
        <MainSection sectionHeaderRef={sectionHeaderRef} />
      </WidthBox>

      <WidthBox>
        <SectionWrapper big name="Services" titles={['This is what we do best']}>
          <ServiceList />
        </SectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper name="Expertise" titles={['You have an idea', 'We have a solution']}>
          <ExpertiseList />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper big name="Case studies" titles={['Portfolio']}>
          <PortfolioList data={portfolioListData.slice(0, 4)} moreButton />
        </SectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper
          name="About us"
          titles={['In numbers']}
          link="/about"
          linkText="read about us"
        >
          <AboutUsNumbers />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper big name="Testimonials" titles={['Our partners say']} link="/testimonials">
          <TestimonialList data={testimonialListData.slice(0, 3)} />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
