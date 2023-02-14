import { Circle } from 'phosphor-react'
import { TagContainer, TimelineItemContainer } from './styles'

export interface TimelineItemProps {
  title: string
  text: string
  time_init: string
  time_end: string
  category: 'Data Analysis' | 'Web Development' | 'Product Development'
}

const colorCategory = {
  'Data Analysis': 'dataAnalysis',
  'Web Development': 'webDevelopment',
  'Product Development': 'productDevelopment',
}

export function TimelineItem({ title, text, time_init, time_end, category }: TimelineItemProps) {
  return (
    <TimelineItemContainer>
      <TagContainer>{category}</TagContainer>
      <h3>{title}</h3>
      <time>
        From <span>{time_init}</span> to <span>{time_end}</span>
      </time>
      <p>{text}</p>
      <Circle size={5} />
    </TimelineItemContainer>
  )
}
