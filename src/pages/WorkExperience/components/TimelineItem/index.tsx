import { TimelineItemTopContainer, TimelineItemContainer } from './styles'

export interface TimelineContentProps {
  key: number
  title: string
  text: string
  category:
    | 'Data Analysis'
    | 'Web Development'
    | 'Product Development'
    | 'Engineering'
}
export interface TimelineItemProps {
  key: number
  company: string
  timeInit: string
}

// const colorCategory = {
//   'Data Analysis': 'dataAnalysis',
//   'Web Development': 'webDevelopment',
//   'Product Development': 'productDevelopment',
//   'Engineering': 'engineering',
// }

export function TimelineItem({ company, timeInit }: TimelineItemProps) {
  return (
    <TimelineItemContainer>
      <TimelineItemTopContainer>
        <button>{company}</button>
      </TimelineItemTopContainer>
      <span>{timeInit}</span>
    </TimelineItemContainer>
  )
}
