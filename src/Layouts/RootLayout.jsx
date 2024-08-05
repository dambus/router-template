import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
