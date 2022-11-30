import "./App.css";
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { useState } from "react";

function App() {
  const [open,setOpen] = useState(false);

  const drawerToggleHandler = () => {
    setOpen(!open)
  }

  const backdropClickHandler = () => {
    setOpen(false)
  }

  let backdrop;

  if(open) {
    backdrop= <Backdrop click={backdropClickHandler}/>;
  }

  return (
    <div className="App" style={{height:'100%'}}>
      <Toolbar drawerClickHandler={drawerToggleHandler}/>
      <SideDrawer show={open}/>
      {backdrop}
      <div className="main-content">
        <div className="sub-content">
          <div className="sub-element"></div>
          <div className="sub-element"></div>
          <div className="sub-element"></div>
          <div className="sub-element"></div>
          <div className="sub-element"></div>
          <div className="sub-element"></div>
        </div>
        <div className="sub-content">
        <div className="final-element"></div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
