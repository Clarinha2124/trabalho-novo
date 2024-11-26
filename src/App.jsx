import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import './global.css';




const posts = [
{
  id:1,
  author:{
    avatarUrl:'https://github.com/Clarinha2124.png',
    nome: 'Clara Cavalheiro',
    cargo: 'Aluna da Etec'
  },
  content: [
    {type: 'paragraph', content: 'Oioi gentee!!'},
    {type: 'paragraph', content: 'Recomendação de livro aquii'},
 
  ],
  dataPublicacao: new Date('2024/11/26 10:47:00')
},

{
  id:2,
  author:{
    avatarUrl:'https://github.com/Eduardapac.png',
    nome: 'Eduarda Leite',
    cargo: 'Aluna da Etec'
  },
  content: [
    {type: 'paragraph', content: 'Oi pessoal!!'},
    {type: 'paragraph', content: 'Recomendação de livro aquii'},

  ],
  dataPublicacao: new Date('2024/11/26 10:47:00')
}

]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
         {posts.map(post => {
          return(
          <Post
          author={post.author}
          content={post.content}
          dataPublicacao={post.dataPublicacao}
          />
          )
         })}
        </main>
      </div>
    </div>
  )
}
