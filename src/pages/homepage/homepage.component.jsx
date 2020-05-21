import React from 'react'
import './homepage.styles.scss'
import MenuItem from '../../components/menu-item/menu-item.components'

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <MenuItem title="HATS" />
      </div>
    </div>
  )
}
export default HomePage
