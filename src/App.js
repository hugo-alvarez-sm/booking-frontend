import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Activity from './pages/Activity'
import Flight from './pages/Flight'
import Hotel from './pages/Hotel'
import PersonalizedActivity from './pages/PersonalizedActivity'
import PersonalizedResume from './pages/PersonalizedResume'


export default function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/activity" element={<Activity />}/>
          <Route path="/activity/flight" element={<Flight />}/>
          <Route path="/activity/hotel" element={<Hotel />}/>
          <Route path="/activity/personalized" element={<PersonalizedActivity />}/>
          <Route path="/activity/personalized/resume" element={<PersonalizedResume />} />
        </Routes>
      </BrowserRouter>
    
    </div>       
        
  )
}
