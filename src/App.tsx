import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";

import './global.css';

import styles from './app.module.css';

// Backend
const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/caioeliws.png',
      name: 'Caio Elias Vieira',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      
      { type: 'link', content: '👉 jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date('2024-04-04 11:50:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-04-04 18:20:00'),
  },
];

// iteração

export default function App() {
  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}