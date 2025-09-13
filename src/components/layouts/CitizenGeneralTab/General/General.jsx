import React from "react";

import Input from "@/components/ui/Input/Input";
import Selector from "@/components/ui/Selector/Selector";
import { useSelector } from "react-redux";
import TextArea from "@/components/ui/TextArea/TextArea";
import FormRow from "@/components/ui/FormRow/FormRow";
import InfoBlock from "@/components/ui/InfoBlock/InfoBlock";
import MultiSelector from "@/components/ui/MultiSelector/MultiSelector";
import { Controller, useForm } from "react-hook-form";

const toInputDateFormat = (dateString) => {
  if (!dateString) return "";
  const [day, month, year] = dateString.split(".");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const General = ({ citizen }) => {

  const { citizens } = useSelector(({ citizens }) => citizens);
  const {
    register,
    control,
  } = useForm({
    defaultValues: {
      name: citizen.name || "",
      birthDate: toInputDateFormat(citizen.birthDate) || "",
      gender: citizen.gender || "",
      maritalStatus: citizen.general.maritalStatus || "",
      citizenship: citizen.general.citizenship || "",
      passport: citizen.documents.passport || "",
      inn: citizen.documents.taxId || "",
      driverLicense: citizen.documents.driverLicense || "",
      notes: citizen.additional.notes || "",
      hobbies: citizen.additional.hobbies || [],
    },
  });

  return (
    <InfoBlock title={"Основная информация"}>
      <FormRow>
        <Input 
          type={"text"} 
          placeholder={"Имя"} 
          {...register("name")}
        />
        <Input
          type={"date"}
          placeholder={"Дата рождения"}
          {...register("birthDate")}
        />
      </FormRow>
      <FormRow>
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <Selector
              placeholder="Пол"
              value={field.value}
              data={citizens}
              field="gender"
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />

        <Controller
          control={control}
          name="maritalStatus"
          render={({ field }) => (
            <Selector
              placeholder="Семейное положение"
              value={field.value}
              data={citizens}
              field="general.maritalStatus"
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </FormRow>
      <FormRow>
        <Controller
          control={control}
          name="citizenship"
          render={({ field }) => (
            <Selector
              placeholder="Гражданство"
              value={field.value}
              data={citizens}
              field="general.citizenship"
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
        <Input
          type={"number"}
          placeholder={"Паспорт"}
          {...register("passport")}
        />
      </FormRow>
      <FormRow>
        <Input
          type={"number"}
          placeholder={"ИНН"}
          {...register("inn")}
        />
        <Input
          type={"number"}
          placeholder={"Водительское удостоверение"}
          {...register("driverLicense")}
        />
      </FormRow>

      <FormRow>
        <TextArea
          placeholder="Любимая фраза"
          {...register("notes")}
        />
      </FormRow>

      <FormRow>
        <Controller
          control={control}
          name="hobbies"
          render={({ field }) => (
            <MultiSelector
              placeholder="Хобби"
              value={field.value}
              data={citizens}
              field="additional.hobbies"
              onChange={field.onChange}
            />
          )}
        />
      </FormRow>
    </InfoBlock>
  );
};

export default General;
