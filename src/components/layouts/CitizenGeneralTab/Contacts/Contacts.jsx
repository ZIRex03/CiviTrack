import React, { useState } from 'react'

import InfoBlock from '@/components/ui/InfoBlock/InfoBlock'
import FormRow from '@/components/ui/FormRow/FormRow'
import TextArea from '@/components/ui/TextArea/TextArea'
import Input from '@/components/ui/Input/Input'
import Selector from '@/components/ui/Selector/Selector'
import { useSelector } from 'react-redux'

const Contacts = ({citizen}) => {

  const {citizens} = useSelector(({citizens}) => citizens)

  const [address, setAddress] = useState(citizen.contacts.address || "");
  const [zipcode, setZipcode] = useState(citizen.contacts.zipcode || "");
  const [city, setCity] = useState(citizen.region || "");
  const [website, setWebsite] = useState(citizen.contacts.website|| "");
  const [whatsapp, setWhatsapp] = useState(citizen.contacts.whatsapp || "");
  const [telegram, setTelegram] = useState(citizen.contacts.telegram || "");
  return (
    <InfoBlock title={"Контактная информация"}>
      <FormRow>
        <TextArea
          placeholder="Адрес"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </FormRow>

      <FormRow>
        <Selector
          placeholder="Город"
          value={city}
          data={citizens}
          field="region"
          onChange={(e) => setCity(e.target.value)}
        />
        <Input
          placeholder="Почтовый индекс"
          type="number"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
      </FormRow>

      <FormRow>
        <Input
          placeholder="Website"
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </FormRow>

      <FormRow>
        <Input
          placeholder="Whatsapp"
          type="text"
          value={`+7 ${whatsapp}`}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
        <Input
          placeholder="Telegram"
          type="text"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
        />
      </FormRow>

    </InfoBlock>
  )
}

export default Contacts