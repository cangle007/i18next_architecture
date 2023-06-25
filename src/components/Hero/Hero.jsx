import { useEffect } from "react";
import { useSelector } from "react-redux";
import useUsersData from "../../redux/hooks/useDataProcess";
import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { getUsersDataProcess, getHeroProcess } = useUsersData();
  const { t, i18n } = useTranslation();

  const pokemonName = useSelector((state) => state.main.pokemon);
  const userNames = useSelector((state) => state.main.users);
  const heroName = useSelector((state) => state.hero.superHero);

  useEffect(() => {
    getUsersDataProcess();
    getHeroProcess();
  }, []);

  return (
    <>
      <p>Hero COMPONENT</p>
      <button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        ENGLISH
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("vi");
        }}
      >
        VIETNAMESE
      </button>
      <div>{t("msg.welcome")}</div>
      {/* <div>{t("msg.chao")}</div> */}

      <div>pokemonName: {pokemonName}</div>
      <div>superHero: {heroName}</div>
      <div>
        {userNames.map((obj) => {
          return <div>{obj.name + " - " + obj.age}</div>;
        })}
      </div>
    </>
  );
};

export default Hero;
