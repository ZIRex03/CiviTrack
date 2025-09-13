import Education from '@/components/layouts/CitizenEducationTab/Education/Education'
import WrapperTab from '@/components/ui/WrapperTab/WrapperTab'
import React from 'react'

const CitizenEducationTab = ({citizen}) => {
  return (
    <WrapperTab>
        <Education citizen = {citizen}/>
    </WrapperTab>
  )
}

export default CitizenEducationTab