import { TimelineItem, TimelineItemProps } from '../TimelineItem'

import { TimelineContainer } from './styles'

const timelineData: TimelineItemProps[] = [
  {
    key: 1,
    company: 'Coca-Cola',
    timeInit: 'April 2018',
  },
  {
    key: 2,
    company: 'Electrolux',
    timeInit: 'February 2019',
  },
  {
    key: 3,
    company: 'EloGroup',
    timeInit: 'June 2020',
  },
  {
    key: 4,
    company: 'Gupy',
    timeInit: 'March 2022',
  },
  {
    key: 5,
    company: 'Voluntarios',
    timeInit: 'November 2022',
  },
]

export function Timeline() {
  return (
    <TimelineContainer>
      {timelineData.map((timelineItem) => (
        // eslint-disable-next-line react/jsx-key
        <TimelineItem
          key={timelineItem.key}
          company={timelineItem.company}
          timeInit={timelineItem.timeInit}
        />
      ))}
    </TimelineContainer>
  )
}
