import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home';
import Error from '../pages/Error'
import Notices from '../pages/Notices'
import Project from '../pages/Project'

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/*" element={<Error />} />
        <Route path="/notices" element={<Notices />} />
    </Routes>
  )
}

export default Router