import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer position='bottom-left' autoClose={1000} toastStyle={{backgroundColor:"#7c3aed",color:"white"}}/>
      </BrowserRouter>
    </Provider>
  
)
