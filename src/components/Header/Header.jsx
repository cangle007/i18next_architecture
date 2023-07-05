import { useState } from 'react';
import { useTranslation, Translation } from 'react-i18next';
import classNames from 'classnames';
import styles from './Header.module.scss';

const Header = () => {
  const { t, i18n } = useTranslation('messages');
  // const { t, i18n } = useTranslation(['app', 'common', 'messages']); //usng messages will not work
  const [currLang, setLang] = useState('America');

  return (
    <>
      <h1>Header</h1>
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
      <h3 className={classNames(styles.header)}>Header</h3>
      <p>{t('msg.welcome', { country: currLang })}</p>
      <p>{t('about.founders')}</p>
      <p>{t('about.company')}</p>
      <p>{t('messages:about.company')}</p>

      {/* <Translation ns={'messages'}>
        {(t, { i18n }) => <p>{t('about.company')}</p>}
      </Translation> */}

      <h4>{currLang}</h4>
    </>
  );
};

export default Header;
