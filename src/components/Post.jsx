import styles from './Post.module.css';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import ptBr, { ptBR } from 'date-fns/locale/pt-BR';


export function Post({author, dataPublicacao,content}){
const dataFormatada= format(dataPublicacao, "d 'de' LLLL 'às' HH:mm 'h'", {locale:ptBr})
const dataRelativaAoPost = formatDistanceToNow(dataPublicacao,{
    locale: ptBR,
        addSuffix: true
})
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                    className={styles.avatar} 
                    src={author.avatarUrl}
                    />
                    <p></p>
                    <div className={styles.authorInfo}>
                        <strong>{author.nome}</strong>
                        <span>{author.cargo}</span>
                    </div>
                    <p></p>
                </div>

                <p></p>
                <time title={dataFormatada} dateTime={dataPublicacao.toISOString()}>
                {dataRelativaAoPost}
                </time>
                <p></p>

            </header>

            <div className={styles.content}>
           
            {
                content.map(line => {
                   if (line.type=== 'paragraph'){
                    return <p>{line.content}</p>
                   }
                   else if (line.type=== 'link'){
                    return <p><a  target='blank'href={line.content}> {line.content}</a></p>
                   }
                })
             }
              <img src='/src/assets/mulherzinhas.jpg'></img>
            </div>
            
            <form className={styles.commentForm}>
             <strong>Deixe seu comentário</strong>

             <textarea placeholder='deixe um comentário'></textarea>


           <footer>
             <button type='submit'> Publicar </button>
             </footer>
            </form>

<div className={styles.commentList}>
<Comment/>
</div>
</article>

    )
}