import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Apple from './App.jsx'
import User,{Student,Teacher,UserKey} from './user.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apple />
    <Student />
    <Teacher />
    <User />
    <h1>{UserKey}</h1>
  </StrictMode>,
)
