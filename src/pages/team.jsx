import { readFile } from '@utils';
import { Team } from '@views';

export async function getStaticProps({ locale }) {
  const headerData = await readFile('/db/header.data.json');
  const footerData = await readFile('/db/footer.data.json');
  const teamData = await readFile('/db/team.data.json');
  const whyUsData = await readFile('/db/why-us.data.json');

  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
      initialZustandState: {
        headerLinks: headerData?.[locale]?.headerLinks,
        hamburgerLinks: headerData?.[locale]?.hamburgerLinks,
        footerLinks: footerData?.[locale]?.footerLinks,
        footerTerms: footerData?.[locale]?.footerTerms,
        footerSocialLogoList: footerData?.[locale]?.footerSocialLogoList,
        teamData: teamData?.[locale],
        whyUsData: whyUsData?.[locale],
      },
    },
  };
}

export default Team;
