import { readFile } from '@utils';
import { ServicesOutstaff } from '@views';

export async function getStaticProps({ locale }) {
  const headerData = await readFile('/db/header.data.json');
  const footerData = await readFile('/db/footer.data.json');
  const serviceOutstaffProcessData = await readFile('/db/service-outstaff-process.data.json');
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
        serviceOutstaffProcessData: serviceOutstaffProcessData?.[locale],
        whyUsData: whyUsData?.[locale],
        expertiseData: expertiseData?.[locale],
        portfolioData: portfolioData?.[locale],
      },
    },
  };
}

export default ServicesOutstaff;
