import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NewGameButton.module.scss';
import { useAppDispatch } from '../store/hooks';
import { startNewGame } from '../store/gameSlice';

export const NewGameButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    function handleNewGame() {
        dispatch(startNewGame());
    }

    return (
        <button className={styles.newGame} onClick={handleNewGame}>
            {t('newGame.button')}
        </button>
    );
};
