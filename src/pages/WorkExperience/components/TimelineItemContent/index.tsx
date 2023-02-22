import { TagContainer, TimelineContentContainer } from './styles'
import { TimelineContentProps } from '../TimelineItem'

const timelineContentData: TimelineContentProps[] = [
  {
    key: 2,
    title: 'Sales Operations Intern',
    text: "Working in one of the most popular companies in the world, I was responsible for delivering the sales numbers of five different Bottlers. I've also created a dashboard to measure the effectiveness of promotions and prepared reports with improvement proposals for the decision-making process.",
    category: 'Data Analysis',
  },
  {
    key: 3,
    title: 'Product Owner Junior',
    text: "Working in one of the most popular companies in the world, I was responsible for delivering the sales numbers of five different Bottlers. I've also created a dashboard to measure the effectiveness of promotions and prepared reports with improvement proposals for the decision-making process.",
    category: 'Data Analysis',
  },
]

export function TimelineItemContent({
  title,
  text,
  category,
}: TimelineContentProps) {
  return (
    <TimelineContentContainer>
      <TagContainer>{category}</TagContainer>
      <h3>{title}</h3>
      <p>{text}</p>
    </TimelineContentContainer>
  )
}
