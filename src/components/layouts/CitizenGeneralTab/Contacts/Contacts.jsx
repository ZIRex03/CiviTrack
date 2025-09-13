import React from "react";

import InfoBlock from "@/components/ui/InfoBlock/InfoBlock";
import FormRow from "@/components/ui/FormRow/FormRow";
import TextArea from "@/components/ui/TextArea/TextArea";
import Input from "@/components/ui/Input/Input";
import Selector from "@/components/ui/Selector/Selector";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";

const Contacts = ({ citizen }) => {
  const { citizens } = useSelector(({ citizens }) => citizens);

  const {
    register,
    control,
  } = useForm({
    defaultValues: {
      address: citizen.contacts.address || "",
      region: citizen.contacts.region|| "",
      zipcode: citizen.contacts.zipcode || "",
      website: citizen.contacts.website || "",
      whatsapp: "+7 " + citizen.contacts.whatsapp || "",
      telegram: citizen.contacts.telegram || "",
    },
  });
  return (
    <InfoBlock title={"Контактная информация"}>
      <FormRow>
        <TextArea
          placeholder="Адрес"
          {...register("address")}
        />
      </FormRow>

      <FormRow>

        <Controller
          control={control}
          name="region"
          render={({field}) => (
            <Selector
              placeholder="Город"
              value={field.value}
              data={citizens}
              field="region"
              onChange={(e) => field.onChange(e.target.value)}
          />
          )}
        />
        
        <Input
          placeholder="Почтовый индекс"
          type="number"
          {...register("zipcode")}
        />
      </FormRow>

      <FormRow>
        <Input
          placeholder="Website"
          type="text"
          {...register("website")}
        />
      </FormRow>

      <FormRow>
        <Input
          placeholder="Whatsapp"
          type="text"
          {...register("whatsapp")}
        />
        <Input
          placeholder="Telegram"
          type="text"
          {...register("telegram")}
        />
      </FormRow>
    </InfoBlock>
  );
};

export default Contacts;
