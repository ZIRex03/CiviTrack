import FormRow from "@/components/ui/FormRow/FormRow";
import InfoBlock from "@/components/ui/InfoBlock/InfoBlock";
import Input from "@/components/ui/Input/Input";
import TextArea from "@/components/ui/TextArea/TextArea";
import WrapperTab from "@/components/ui/WrapperTab/WrapperTab";
import React, { useState } from "react";

const Education = ({ citizen }) => {
  const [eductaion, setEducation] = useState(citizen.education || []);
  const handleChange = (index, field, value) => {
    const updated = [...eductaion];
    updated[index] = { ...updated[index], [field]: value };
    setEducation(updated);
  };
  return (
    <WrapperTab>
      {eductaion.map((educ, index) => (
        <InfoBlock key={index} title={educ.level}>
          <FormRow>
            <TextArea
              placeholder={"Наименование организации"}
              value={educ.institution}
              onChange={(e) =>
                handleChange(index, "institution", e.target.value)
              }
            />
          </FormRow>
          <FormRow>
            <Input
              type="number"
              placeholder="Год окончания"
              value={educ.graduationYear}
              onChange={(e) =>
                handleChange(index, "graduationYear", e.target.value)
              }
            />

            {educ.specialization && (
              <Input
                type="text"
                placeholder="Направление"
                value={educ.specialization}
                onChange={(e) =>
                  handleChange(index, "specialization", e.target.value)
                }
              />
            )}
          </FormRow>
        </InfoBlock>
      ))}
    </WrapperTab>
  );
};

export default Education;
