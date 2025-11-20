import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';

export const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <p>
                {t('about.developedBy')} <a href="https://www.martinhujer.cz/">{t('about.developedByName')}</a>{' '}
                {t('about.year')}. {t('about.sourceCode')}{' '}
                <a href="https://github.com/mhujer/ants">{t('about.github')}</a>.
            </p>
            <p>
                {t('about.originalGameIntro')}{' '}
                <a href="https://www.breatharian.eu/Panda38/index.html">{t('about.originalAuthor')}</a>.<br />{' '}
                {t('about.downloadInfo')}{' '}
                <a href="https://www.breatharian.eu/sw/index.html">{t('about.downloadLink')}</a>{' '}
                {t('about.downloadLocation')} <em>&quot;{t('about.license')}&quot;</em>.
            </p>
        </footer>
    );
};
