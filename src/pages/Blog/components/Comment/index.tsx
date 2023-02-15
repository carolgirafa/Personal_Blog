import { ThumbsUp, Trash } from 'phosphor-react'

import { useState } from 'react'
import {
  AuthorAndTimeContainer,
  CommentContainer,
  CommentContentContainer,
} from './styles'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleNewLikeComment() {
    setLikeCount((oldLikeCount) => {
      return oldLikeCount + 1
    })
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <CommentContainer>
      <div>
        <CommentContentContainer>
          <header>
            <AuthorAndTimeContainer>
              <strong>Gabriel</strong>
              <time
                title="December 28th, 2022 at 14:42"
                dateTime="2022-12-28 14:42:40"
              >
                An hour ago
              </time>
            </AuthorAndTimeContainer>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </CommentContentContainer>

        <footer>
          <button onClick={handleNewLikeComment}>
            <ThumbsUp />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </CommentContainer>
  )
}
