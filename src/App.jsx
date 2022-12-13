import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageSlide from './animations/PageSlide'
import './App.css'
import Navigation from './components/Navigation'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'

function App() {
  return (
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route element={<PageSlide />}>
              <Route path='/' element={<Page1 />}/>
              <Route path='/route2' element={<Page2 />}/>
              <Route path='/route3' element={<Page3 />}/>
            </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App