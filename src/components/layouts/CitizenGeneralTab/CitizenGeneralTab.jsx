import React from 'react'

import General from '@/components/layouts/CitizenGeneralTab/General/General'
import Contacts from '@/components/layouts/CitizenGeneralTab/Contacts/Contacts'
import Emergency from '@/components/layouts/CitizenGeneralTab/Emergency/Emergency'
import WrapperTab from '@/components/ui/WrapperTab/WrapperTab'
import Consents from '@/components/layouts/CitizenGeneralTab/Consents/Consents'

const CitizenGeneralTab = ({citizen}) => {
  return (
    <WrapperTab>
        <General citizen={citizen}/>
        <Contacts citizen={citizen}/>
        <Emergency citizen={citizen}/>
        <Consents citizen={citizen}/>
    </WrapperTab>
  )
}

export default CitizenGeneralTab