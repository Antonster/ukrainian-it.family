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
import { useMemo } from 'react';

import styles from './ServicesOutstaff.module.scss';

export const ServicesOutstaff = () => {
  const headTitle = useMemo(() => `Outstaff Service | Ukrainian-IT.Family`, []);
  const crumbs = useMemo(
    () => [{ link: '/', text: 'Homepage' }, { link: '/services', text: 'Services' }, 'Outstaff'],
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
          title="Find a ukrainian soul to fulfil your project"
          description="Need a responsible and proactive team member? Outstaff from us."
          small
        />
      </WidthBox>

      <WidthBox>
        <SectionWrapper name="Process" titles={['How outstaff works']}>
          <ServiceProcess data={serviceOutstaffProcessData} />
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
          <PortfolioList data={portfolioListData.slice(0, 4)} moreButton />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
