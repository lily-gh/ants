import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher: React.FC = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={styles.languageSwitcher}>
            <button
                className={i18n.language === 'cs' ? styles.active : ''}
                onClick={() => changeLanguage('cs')}
                aria-label={t('language.czech')}
            >
                {t('language.czech')}
            </button>
            <span className={styles.separator}></span>
            <button
                className={i18n.language === 'en' ? styles.active : ''}
                onClick={() => changeLanguage('en')}
                aria-label={t('language.english')}
            >
                {t('language.english')}
            </button>
        </div>
    );
};
