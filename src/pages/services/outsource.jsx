import { readFile } from '@utils';
import { ServicesOutsource } from '@views';

export async function getStaticProps({ locale }) {
  const headerData = await readFile('/db/header.data.json');
  const footerData = await readFile('/db/footer.data.json');
  const serviceOutsourceProcessData = await readFile('/db/service-outsource-process.data.json');
  const whyUsData = await readFile('/db/why-us.data.json');
  const expertiseData = await readFile('/db/expertise.data.json');
  const portfolioData = await readFile('/db/portfolio.data.json');

  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default,
      initialZustandState: {
        headerLinks: headerData?.[locale]?.headerLinks,
        hamburgerLinks: headerData?.[locale]?.hamburgerLinks,
        footerLinks: footerData?.[locale]?.footerLinks,
        footerTerms: footerData?.[locale]?.footerTerms,
        footerSocialLogoList: footerData?.[locale]?.footerSocialLogoList,
        serviceOutsourceProcessData: serviceOutsourceProcessData?.[locale],
        whyUsData: whyUsData?.[locale],
        expertiseData: expertiseData?.[locale],
        portfolioData: portfolioData?.[locale],
      },
    },
  };
}

export default ServicesOutsource;
