import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import { PlanetPage } from './PlanetPage.tsx' 

const router = createBrowserRouter([
 {
  path : "/",
  element: <App />
 },
 {
  path: "/:planetName",
  element : <PlanetPage />,
 },
])

createRoot(document.getElementById('root')!).render(
 <RouterProvider router={router} />
)