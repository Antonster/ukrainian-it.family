import { portfolioListData } from '@data';
import { PortfolioId } from '@views';

export const getStaticPaths = async (context) => {
  const paths = portfolioListData[context.defaultLocale].flatMap(({ id }) =>
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

export async function getStaticProps(context) {
  const project = portfolioListData[context.locale].find((item) => item.id === context.params.id);

  return {
    props: {
      project,
      messages: (await import(`../../locales/${context.locale}.json`)).default,
    },
  };
}

export default PortfolioId;
