import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { WorkExperience } from './pages/WorkExperience'
import { Blog } from './pages/Blog'

import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  )
}
