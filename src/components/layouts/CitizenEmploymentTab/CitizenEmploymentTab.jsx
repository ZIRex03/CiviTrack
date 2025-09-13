import Employment from '@/components/layouts/CitizenEmploymentTab/Employment/Employment'
import WrapperTab from '@/components/ui/WrapperTab/WrapperTab'
import React from 'react'

const CitizenEmploymentTab = ({citizen}) => {
  return (
    <WrapperTab>
        <Employment citizen={citizen}/>
    </WrapperTab>
  )
}

export default CitizenEmploymentTab