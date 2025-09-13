import Family from '@/components/layouts/CitizenFamilyTab/Family/Family'
import WrapperTab from '@/components/ui/WrapperTab/WrapperTab'
import React from 'react'

const CitizenFamilyTab = ({citizen}) => {
  return (
    <WrapperTab>
        <Family citizen={citizen}/>
    </WrapperTab>
  )
}

export default CitizenFamilyTab