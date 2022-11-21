import { Breadcrumbs, Footer, Header } from '@components/elements';
import { SectionWrapper, TitleSectionWrapper, WidthBox } from '@components/layouts';
import {
  DropALine,
  ExpertiseList,
  PortfolioList,
  ServiceProcess,
  WhyUs,
} from '@components/sections';
import { portfolioListData, serviceOutsourceProcessData } from '@constants';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import styles from './ServicesOutsource.module.scss';

export const ServicesOutsource = () => {
  const router = useRouter();
  const headTitle = useMemo(() => `Outsource Service | Ukrainian-IT.Family`, []);
  const crumbs = useMemo(
    () => [{ link: '/', text: 'Homepage' }, { link: '/services', text: 'Services' }, 'Outsource'],
    [],
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
        <TitleSectionWrapper
          title="Let us be your outsource team"
          description="Credit us a project and let’s become partners"
          small
        />
      </WidthBox>

      <WidthBox>
        <SectionWrapper name="Process" titles={['How projects get done']}>
          <ServiceProcess data={serviceOutsourceProcessData} />
        </SectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper name="Drop a line" titles={['Credit us your project']}>
          <DropALine
            descriptionField
            fileLabel="Brief"
            formDescription="Drop us a line and we’ll contact you as soon as possible"
            formLabel="Contact Us"
          />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper name="Why us" titles={['Why us']}>
          <WhyUs />
        </SectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper name="Expertise" titles={['You have an idea', 'We have a solution']}>
          <ExpertiseList />
        </SectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper big name="Case studies" titles={['Portfolio']}>
          <PortfolioList data={portfolioListData[router.locale].slice(0, 4)} moreButton />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
