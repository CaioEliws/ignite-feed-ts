import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

import studioImage from '../assets/studiodev-image.jpg'

import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={studioImage} className={styles.cover} />

            <div className={styles.profile}>
                <Avatar src="https://github.com/caioeliws.png" />

                <strong>Caio Elias Vieira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}