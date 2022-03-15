import { useState } from 'react'


import { Header } from './components/Header';
import { Characters } from './components/Characters';

import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark': ''}`}>
     <Header
      darkMode={darkMode}
      setDarkMode={setDarkMode}
     />
     <Characters/>
    </div>
  )
}

export default App
