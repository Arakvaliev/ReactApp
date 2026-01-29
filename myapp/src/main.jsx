import { createRoot } from 'react-dom/client'
import App from './App'
import { HarryPotter, LordOfTheRings } from "./Component"

createRoot(document.getElementById('root')).render(
  <App>
    <HarryPotter />
    <LordOfTheRings/>
  </App>
  )
