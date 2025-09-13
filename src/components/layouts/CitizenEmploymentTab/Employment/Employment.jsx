import React, { useState } from "react";
import FormRow from "@/components/ui/FormRow/FormRow";
import Input from "@/components/ui/Input/Input";
import Selector from "@/components/ui/Selector/Selector";
import InfoBlock from "@/components/ui/InfoBlock/InfoBlock";
import { useSelector } from "react-redux";
import WrapperTab from "@/components/ui/WrapperTab/WrapperTab";

const Employment = ({ citizen }) => {
  const { citizens } = useSelector(({ citizens }) => citizens);
  const [employment, setEmployment] = useState(citizen.employment || []);

  const handleChange = (index, field, value) => {
    const updated = [...employment];
    updated[index] = { ...updated[index], [field]: value };
    setEmployment(updated);
  };

  return (
    <WrapperTab>
      {employment.map((job, index) => (
        <InfoBlock key={index} title={job.company}>
          <FormRow>
            <Input
              type="text"
              placeholder="Должность"
              value={job.jobTitle}
              onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Стаж (лет)"
              value={job.experienceYears}
              onChange={(e) =>
                handleChange(index, "experienceYears", e.target.value)
              }
            />
          </FormRow>

          <FormRow>
            <Selector
              placeholder="Статус"
              value={job.status}
              data={citizens}
              field="employment.status"
              onChange={(e) => handleChange(index, "status", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Зарплата"
              value={job.salary}
              onChange={(e) => handleChange(index, "salary", e.target.value)}
            />
          </FormRow>

          <FormRow>
            <Input
              type="date"
              placeholder="Дата начала"
              value={job.startDate || ""}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
            />
            <Input
              type="date"
              placeholder="Дата окончания"
              value={job.endDate || ""}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
            />
          </FormRow>
        </InfoBlock>
      ))}
    </WrapperTab>
  );
};

export default Employment;
