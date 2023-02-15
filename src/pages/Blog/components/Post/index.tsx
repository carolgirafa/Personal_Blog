import { format, formatDistanceToNow } from 'date-fns'

import { Comment } from '../Comment'

import {
  CommentContainer,
  CommentListContainer,
  ContentContainer,
  PostContainer,
} from './styles'

import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostProps {
  id: number
  title: string
  publishedAt: Date
  content: Content[]
}

export function Post({ id, title, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState<string[]>([])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "LLLL d',' yyyy 'at' HH:mm",
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('You must write something to post')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <PostContainer>
      <header>
        <strong>{title}</strong>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <ContentContainer>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href={line.content}>{line.content}</a>
              </p>
            )
          } else {
            return <p key={line.content}>{line.content}</p>
          }
        })}
      </ContentContainer>

      <CommentContainer onSubmit={handleCreateNewComment}>
        <textarea
          name="comment"
          placeholder="Leave a comment here"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <div>
          <textarea
            name="author"
            placeholder="Your name (opcional)"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
          />
        </div>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Post
          </button>
        </footer>
      </CommentContainer>

      <CommentListContainer>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </CommentListContainer>
    </PostContainer>
  )
}
