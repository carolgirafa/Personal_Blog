import { TimelineItem, TimelineItemProps } from '../TimelineItem/index'
import { TimelineContainer } from './styles'

const timelineData: TimelineItemProps[] = [
  {
    title: 'Sales Operations Intern at The Coca-Cola Company',
    text: "Working in one of the most popular companies in the world, I was responsible for delivering the sales numbers of five different Bottlers. I've also created a dashboard to measure the effectiveness of promotions and prepared reports with improvement proposals for the decision-making process.",
    time_init: 'June 2018',
    time_end: 'February 2019',
    category: 'Data Analysis',
  },
  {
    title: 'Global Engineering Program Trainee at Electrolux',
    text: 'My first professional experience was an internship in the Brazilian Oil and Gas Agency. I used to update national reports built on Excel and run ad-hoc searches on the agency databases.',
    time_init: 'June 2017',
    time_end: 'December 2017',
    category: 'Product Development',
  },
]

export function Timeline() {
  return (
    <TimelineContainer>
      {timelineData.map((timelineItem) => (
        // eslint-disable-next-line react/jsx-key
        <TimelineItem
          title={timelineItem.title}
          text={timelineItem.text}
          time_init={timelineItem.time_init}
          time_end={timelineItem.time_end}
          category={timelineItem.category}
        />
      ))}
    </TimelineContainer>
  )
}
