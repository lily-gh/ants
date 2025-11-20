import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PlayerBadge.module.scss';
import { Player } from './Player';

interface Props {
    player: Player;
    isOnTurn: boolean;
}

export const PlayerBadge: React.FC<Props> = ({ player, isOnTurn }) => {
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        <div className={`${styles.badge} ${isOnTurn ? styles.badgeActive : ''}`}>
            {t(`players.${player}`)}
        </div>
    );
};
