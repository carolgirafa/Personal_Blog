// import { useContext } from 'react'
import { WorkExperienceContainer } from './styles'

import { Timeline } from './components/Timeline'
// import { Contact } from '../../components/Contact'
// import { TimelineItemContent } from './components/TimelineItemContent'

export function WorkExperience() {
  return (
    <WorkExperienceContainer>
      <Timeline />
      {/* <TimelineItemContent key={1} company="oi2" timeInit="oi3" /> */}
      {/* <Contact /> */}
    </WorkExperienceContainer>
  )
}
