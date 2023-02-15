import { Post, PostProps } from './components/Post'
import { BlogContainer } from './styles'

const posts: PostProps[] = [
  {
    id: 1,
    title: 'oi pessoal tudo bem',
    content: [
      { type: 'paragraph', content: 'Meu site com React + Vite' },
      {
        type: 'paragraph',
        content: 'Voce pode acessar mais projetos meus no meu GitHub:',
      },
      { type: 'link', content: 'https://github.com/GBTelles1' },
    ],
    publishedAt: new Date('2022-12-27 14:42:40'),
  },
  {
    id: 2,
    title: 'e agora',
    content: [
      { type: 'paragraph', content: 'Meu GitHub:' },
      { type: 'link', content: 'https://github.com/carolgirafa' },
    ],
    publishedAt: new Date('2022-12-30 12:40:40'),
  },
  {
    id: 3,
    title: 'gabigol',
    content: [
      { type: 'paragraph', content: 'Meu GitHub:' },
      { type: 'link', content: 'https://github.com/eriket0107' },
    ],
    publishedAt: new Date('2022-12-30 12:40:40'),
  },
]

export function Blog() {
  return (
    <BlogContainer>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            publishedAt={post.publishedAt}
            id={0}
          />
        )
      })}
    </BlogContainer>
  )
}
