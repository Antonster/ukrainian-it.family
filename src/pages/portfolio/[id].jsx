import { readFile } from '@utils';
import { PortfolioId } from '@views';

export const getStaticPaths = async (context) => {
  const portfolioData = await readFile('/db/portfolio.data.json');

  const paths = portfolioData[context.defaultLocale].flatMap(({ id }) =>
    context.locales.map((locale) => ({
      params: { id },
      locale,
    })),
  );

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ locale, params }) {
  const headerData = await readFile('/db/header.data.json');
  const footerData = await readFile('/db/footer.data.json');
  const portfolioData = await readFile('/db/portfolio.data.json');
  const testimonialsData = await readFile('/db/testimonials.data.json');

  const project = portfolioData?.[locale]?.find((item) => item.id === params.id);

  return {
    props: {
      project,
      messages: (await import(`../../locales/${locale}.json`)).default,
      initialZustandState: {
        headerLinks: headerData?.[locale]?.headerLinks,
        hamburgerLinks: headerData?.[locale]?.hamburgerLinks,
        footerLinks: footerData?.[locale]?.footerLinks,
        footerTerms: footerData?.[locale]?.footerTerms,
        footerSocialLogoList: footerData?.[locale]?.footerSocialLogoList,
        testimonialsData: testimonialsData?.[locale],
      },
    },
  };
}

export default PortfolioId;
