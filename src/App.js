import Header from './components/Header';
import Footer from './components/Footer'
import About from './pages/About.js'
import Photos from './pages/Photos.js'
import Videos from './pages/Videos.js'
import Contact from './pages/Contact.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/About' element={<About/>}></Route>
          <Route exact path='/Photos' element={<Photos/>}></Route>
          <Route exact path='Videos' element={<Videos/>}></Route>
          <Route exact path='/Contact' element={<Contact/>}></Route>
          {/* Catch all route and redirect to homepage */}
          <Route element={<About/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
