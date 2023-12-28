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

        <body>
          <Provider >
            {children}
          </Provider>
        </body>
    </html>
  )
}

export default Layout