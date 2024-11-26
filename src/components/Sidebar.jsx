import styles from './Sidebar.module.css';

import { PencilLine } from '@phosphor-icons/react/dist/ssr';

export function Sidebar(){
    return (
<aside className={styles.Sidebar}>
<img className={styles.cover} src="/src/assets/estante.png" alt="" />
<div className={styles.profile}>
<img className={styles.avatar} src="https://github.com/Clarinha2124.png" alt="" />





   
    <strong>Clara</strong>
   
    <span>
        @Clarinha
    </span>

    </div>
    <footer>
        <a href="#"> 
        <PencilLine size={20}/>
        Editar seu perfil
        </a>
    </footer>

</aside>
    );
}