import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment() {

    return (

        <div className={styles.comment}>
            <img src="https://github.com/Clarinha2124.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Clara Cavalheiro</strong>
                            <time title="10 de setembro às 09:44h" dateTime="2024/09/10 09:44:00">Publicado à 1h</time>
                        </div>
                        <button title='Excluir comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom !!!!!!</p>

                </div>
                <footer>
                    <button>
                        <ThumbsUp size ={20}/>
                        Curtir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>

    );


}
