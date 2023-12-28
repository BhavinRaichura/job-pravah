import FormSkeleton from '@/components/skeleton/FormSkeleton'
import React from 'react'

const loading = () => {
  return (
    <FormSkeleton formName={"Create Article"}/>
  )
}

export default loading