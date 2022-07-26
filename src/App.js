

import './App.css';
import { Body } from './Components/Body/Body';

import { Header} from './Components/Header/Header';
import { SliderComponent } from './Components/Slider/Slider';

import ReactDOM from 'react-dom'
import { About_us } from './Components/About_us/About_us';
import { Contacts } from './Components/Contacts/Contacts';
import { Footer } from './Components/Footer/Footer';






function App() {
 
  return (
    
   <div className='App'>
    <div className='main main-screen'>
    <Header />
    
    <SliderComponent />
    <Body />
    <About_us />
    <Contacts />
    {/* <GoogleMaps /> */}
    <Footer />
    </div>
    
   </div>
  
  );
}

export default App;


