import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useUsersData from '../../redux/hooks/useDataProcess';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { getUsersDataProcess, getHeroProcess } = useUsersData();
  const { t, i18n } = useTranslation();
  const country =
    document.querySelector('html').lang === 'en' ? 'America' : 'Vietnam';
  const [currLang, setLang] = useState(country);
  // const pokemonName = useSelector((state) => state.main.pokemon);
  // const userNames = useSelector((state) => state.main.users);
  // const heroName = useSelector((state) => state.hero.superHero);
  const users = t('users', { returnObjects: true }); //this is how you map through i18next

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
      <div>{t('msg.welcome', { country: currLang })}</div>
      <div>{t('about.translation')}</div>
      <div>{t('home.context')}</div>
      <h3>Users</h3>
      <div>
        {/* {t("users").map((name) => {
          return <div>{name}</div>;
        })} */}
        {users.map((user, i) => (
          <p key={i}>{user}</p>
        ))}
      </div>

      {/* <div>pokemonName: {pokemonName}</div>
      <div>superHero: {heroName}</div> */}
      <div>
        {/* {userNames.map((obj) => {
          return <div>{obj.name + " - " + obj.age}</div>;
        })} */}
      </div>
    </>
  );
};

export default Hero;
