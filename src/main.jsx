import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/routes';
import AuthProvider from './AuthProvider/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <div className='lg:px-5 '>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   </div>
  
  </React.StrictMode>,
)
