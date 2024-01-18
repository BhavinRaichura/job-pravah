import React from 'react'
import '@/app/globals.css'
import Provider from '@/components/base/Provider'
import './favicon.ico'

export const metadata = {
  title: {
    default : "Job Pravah",
    template : "%s | Job Pravah"
  },
  description: 'Get the latest government exam results and job notifications. Find information and apply for government jobs easily.',
}

const Layout = ({children}) => {
  return (
    <html>
        <head>
          <link rel="stylesheet" href='https://fonts.googleapis.com/css?family=Jost  ' />
        </head>
      
        {/* Google analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5EL2KHZCVK"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-5EL2KHZCVK');
        </script>


        <body>
          <Provider >
            {children}
          </Provider>
        </body>
    </html>
  )
}

export default Layout
