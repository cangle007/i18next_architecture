import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import useUsersData from '../../redux/hooks/useDataProcess';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { getUsersDataProcess, getHeroProcess } = useUsersData();
  const { t, i18n } = useTranslation(['app', 'common', 'messages']);

  const country =
    document.querySelector('html').lang === 'en' ? 'America' : 'Vietnam';
  const [currLang, setLang] = useState(country);
  // const pokemonName = useSelector((state) => state.main.pokemon);
  // const userNames = useSelector((state) => state.main.users);
  // const heroName = useSelector((state) => state.hero.superHero);
  // const infoMsg = t('messages', { returnObjects: true }); //this is how you map through i18next

  useEffect(() => {
    getUsersDataProcess();
    getHeroProcess();
  }, []);

  return (
    <>
      <p>Hero COMPONENT</p>
      <button
        onClick={() => {
          i18n.changeLanguage('en-US');
          setLang('America');
        }}
      >
        ENGLISH
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage('vi-VN');
          setLang('Vietnam');
        }}
      >
        VIETNAMESE
      </button>
      <h3>Header</h3>
      <div>{t('header.login')}</div>
      <div>{t('header.about')}</div>
      <div>{t('header.career')}</div>

      <h3>Company's Info</h3>
      <div>{t('companyInfo.name')}</div>
      <div>{t('companyInfo.location')}</div>
      <div>{t('companyInfo.location_two')}</div>
      <div>{t('companyInfo.contact')}</div>

      <h3>Founders</h3>
      <div>
        {t('founders', { returnObjects: true }).map((obj, i) => (
          <p key={i}>{obj?.name + ': ' + obj?.title}</p>
        ))}
      </div>

      <h3>About US</h3>
      <p>{t('msg.welcome', { country: currLang })}</p>
      <p>{t('about.company')}</p>
      <p>{t('about.founders')}</p>

      <h3>Footer</h3>
      <div>{t('footer.callUs')}</div>
      <div>{t('footer.copyright')}</div>
    </>
  );
};

export default Hero;
