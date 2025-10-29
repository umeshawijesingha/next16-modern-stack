import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        <p> Navbar</p>
        {children}
    </div>
  )
}

export default layout