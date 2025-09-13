import FormRow from "@/components/ui/FormRow/FormRow";
import InfoBlock from "@/components/ui/InfoBlock/InfoBlock";
import Input from "@/components/ui/Input/Input";
import MultiSelector from "@/components/ui/MultiSelector/MultiSelector";
import Selector from "@/components/ui/Selector/Selector";
import WrapperTab from "@/components/ui/WrapperTab/WrapperTab";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Health = ({ citizen }) => {
  const { citizens } = useSelector(({ citizens }) => citizens);

  

  const [insuranceNumber, setInsuranceNumber] = useState(
    citizen.health.insuranceNumber || ""
  );
  const [vaccinations, setVaccinations] = useState(citizen.health.vaccinations || []);
  const [chronicDiseases, setChronicDiseases] = useState(citizen.health.chronicDiseases || []);
  const [allergies, setAllergies] = useState(citizen.health.allergies || []);
  const [disability, setDisability] = useState(citizen.health.disability || "");

  return (
    <InfoBlock>
      <FormRow>
        <Input
          type="number"
          placeholder="СНИЛС"
          value={insuranceNumber}
          onChange={(e) => setInsuranceNumber(e.target.value)}
        />
        <Selector
          placeholder="Инвалидность"
          value={disability}
          onChange={(e) => setDisability(e.target.value)}
          data={citizens}
          field="health.disability"
        />
      </FormRow>

      <FormRow>
        <MultiSelector
          placeholder="Вакцинации"
          name="vaccinations"
          value={vaccinations}
          data={citizens}
          field="health.vaccinations"
          multiple
          onChange={(selected) => setVaccinations(selected)}
        />
        <MultiSelector
          placeholder="Хронические заболевания"
          name="chronicDiseases"
          value={chronicDiseases}
          data={citizens}
          field="health.chronicDiseases"
          multiple
          onChange={(selected) => setChronicDiseases(selected)}
        />
      </FormRow>

      <FormRow>
        <MultiSelector
          placeholder="Аллергии"
          name="allergies"
          value={allergies}
          data={citizens}
          field="health.allergies"
          multiple
          onChange={(selected) => setAllergies(selected)}
        />
      </FormRow>
    </InfoBlock>
  );
};

export default Health;
