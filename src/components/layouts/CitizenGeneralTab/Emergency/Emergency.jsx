import FormRow from "@/components/ui/FormRow/FormRow";
import InfoBlock from "@/components/ui/InfoBlock/InfoBlock";
import Input from "@/components/ui/Input/Input";
import React from "react";
import { useForm } from "react-hook-form";

const Emergency = ({ citizen }) => {
  const {
    register,
  } = useForm({
    defaultValues: {
      emergencyName: citizen.contacts.emergencyContact.name || "",
      emergencyPhone: "+7 " + citizen.contacts.emergencyContact.phone || "",
    },
  });

  return (
    <InfoBlock title={"Контакты экстренной связи"}>
      <FormRow>
        <Input placeholder="Имя" type="text" {...register("emergencyName")} />
        <Input
          placeholder="Телефон"
          type="text"
          {...register("emergencyPhone")}
        />
      </FormRow>
    </InfoBlock>
  );
};

export default Emergency;
