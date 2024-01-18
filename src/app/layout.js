import React from 'react'
import '@/app/globals.css'
import Provider from '@/components/base/Provider'
import './favicon.ico'
import Script from 'next/script'

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
        
        <Script id='1' async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}></Script>
          <Script id='2'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}  
              gtag("js", new Date());
              gtag('config', ${process.env.GOOGLE_ANALYTICS_ID});
            `}
          </Script>


        <body>
          <Provider >
            {children}
          </Provider>
        </body>
    </html>
  )
}

export default Layout
