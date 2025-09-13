import React from "react";

import FormRow from "@/components/ui/FormRow/FormRow";
import InfoBlock from "@/components/ui/InfoBlock/InfoBlock";
import Input from "@/components/ui/Input/Input";
import MultiSelector from "@/components/ui/MultiSelector/MultiSelector";
import Selector from "@/components/ui/Selector/Selector";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Health = ({ citizen }) => {
  const { citizens } = useSelector(({ citizens }) => citizens);

  const {
    register,
    control
  } = useForm({
    defaultValues: {
      insuranceNumber: citizen.health.insuranceNumber || "",
      vaccinations: citizen.health.vaccinations || "",
      chronicDiseases: citizen.health.chronicDiseases || "",
      allergies: citizen.health.allergies || "",
      disability: citizen.health.disability || "",
    },
  });

  return (
    <InfoBlock>
      <FormRow>
        <Input
          type="number"
          placeholder="СНИЛС"
          {...register("insuranceNumber")}
        />

        <Controller
          control={control}
          name="disability"
          render={({field}) => (
            <Selector
              placeholder="Инвалидность"
              value={field.value}
              data={citizens}
              field="health.disability"
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
        
      </FormRow>

      <FormRow>
        <Controller
          control={control}
          name="vaccinations"
          render={({field}) => (
            <MultiSelector
              placeholder="Вакцинации"
              value={field.value}
              data={citizens}
              field="health.vaccinations"
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
        <Controller
          control={control}
          name="chronicDiseases"
          render={({field}) => (
            <MultiSelector
              placeholder="Хронические заболевания"
              value={field.value}
              data={citizens}
              field="health.chronicDiseases"
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </FormRow>

      <FormRow>
        <Controller
          control={control}
          name="allergies"
          render={({field}) => (
            <MultiSelector
              placeholder="Аллергии"
              value={field.value}
              data={citizens}
              field="health.allergies"
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </FormRow>
    </InfoBlock>
  );
};

export default Health;
