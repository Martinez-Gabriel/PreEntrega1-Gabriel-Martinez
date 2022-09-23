import React, {useState} from 'react';
import Navbar from './content/Navbar';
import Contador from './layouts/Contador';
import '../styles/App.css'
import Home from './content/Home';

const App = () => {
    const [state, setstate] = useState(0);
  
      return (
          <>
            <Navbar contador={state}/>
            <Home/>
          
          </>
      );
  }
  
  export default App;
  