import FormRow from "@/components/ui/FormRow/FormRow";
import InfoBlock from "@/components/ui/InfoBlock/InfoBlock";
import Input from "@/components/ui/Input/Input";
import Selector from "@/components/ui/Selector/Selector";
import WrapperTab from "@/components/ui/WrapperTab/WrapperTab";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Family = ({ citizen }) => {
  const { citizens } = useSelector(({ citizens }) => citizens);

  const [family, setFamily] = useState(citizen.family || []);
  const handleChange = (index, field, value) => {
    const updated = [...family];
    updated[index] = { ...updated[index], [field]: value };
    setFamily(updated);
  };
  return (
    <WrapperTab>
      {family.map((member, index) => (
        <InfoBlock key={index} title={member.name}>
          <FormRow>
            <Selector
              placeholder="Отношения"
              value={member.relation}
              data={citizens}
              field="family.relation"
              onChange={(e) => handleChange(index, "relation", e.target.value)}
            />
            <Input
              type={"date"}
              placeholder={"Дата рождения"}
              value={member.birthDate}
              onChange={(e) => handleChange(index, "birthDate", e.target.value)}
            />
          </FormRow>
        </InfoBlock>
      ))}
    </WrapperTab>
  );
};

export default Family;
