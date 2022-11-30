import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if(props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <div className="sidedrawer-container">
        <div className="drawer-item"></div>
        <div className="drawer-item"></div>
      </div>
    </nav>
  )
}

export default sideDrawer