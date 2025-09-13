import Health from '@/components/layouts/CitizenHealthTab/Health/Health'
import WrapperTab from '@/components/ui/WrapperTab/WrapperTab'
import React from 'react'

const CitizenHealthTab = ({citizen}) => {
  return (
    <WrapperTab>
        <Health citizen={citizen}/>
    </WrapperTab>

  )
}

export default CitizenHealthTab