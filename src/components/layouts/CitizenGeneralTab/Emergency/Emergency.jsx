import FormRow from '@/components/ui/FormRow/FormRow'
import InfoBlock from '@/components/ui/InfoBlock/InfoBlock'
import Input from '@/components/ui/Input/Input'
import React, { useState } from 'react'

const Emergency = ({citizen}) => {

    const [emergencyName, setEmergencyName] = useState(citizen.contacts.emergencyContact.name || "")
    const [emergencyPhone, setEmergencyPhone] = useState(citizen.contacts.emergencyContact.phone || "")
  return (
    <InfoBlock title={"Контакты экстренной связи"}>
        <FormRow>
            <Input
                placeholder="Имя"
                type="text"
                value={emergencyName}
                onChange={(e) => setEmergencyName(e.target.value)}
            />
            <Input
                placeholder="Телефон"
                type="text"
                value={`+7 ${emergencyPhone}`}
                onChange={(e) => setEmergencyPhone(e.target.value)}
            />
        </FormRow>
    </InfoBlock>
  )
}

export default Emergency