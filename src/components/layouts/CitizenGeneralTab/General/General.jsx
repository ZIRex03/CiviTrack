import React, { useState } from "react";

import Input from "@/components/ui/Input/Input";
import Selector from "@/components/ui/Selector/Selector";
import { useSelector } from "react-redux";
import TextArea from "@/components/ui/TextArea/TextArea";
import FormRow from "@/components/ui/FormRow/FormRow";
import InfoBlock from "@/components/ui/InfoBlock/InfoBlock";
import MultiSelector from "@/components/ui/MultiSelector/MultiSelector";

const toInputDateFormat = (dateString) => {
  if (!dateString) return "";
  const [day, month, year] = dateString.split(".");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const General = ({ citizen }) => {
  const { citizens } = useSelector(({ citizens }) => citizens);

  const [maritalStatus, setMaritalStatus] = useState(
    citizen.general.maritalStatus || ""
  );
  const [gender, setGender] = useState(citizen.gender || "");
  const [name, setName] = useState(citizen.name || "");
  const [passport, setPassport] = useState(citizen.documents.passport || "");
  const [citizenship, setCitizenship] = useState(citizen.general.citizenship || "");
  const [inn, setInn] = useState(citizen.documents.taxId || "");
  const [driverLicense, setDriverLicense] = useState(citizen.documents.driverLicense || "");
  const [notes, setNotes] = useState(citizen.additional.notes || "");
  const [birthDate, setBirthDate] = useState(
    toInputDateFormat(citizen.birthDate)
  );
  return (
    <InfoBlock title={"Основная информация"}>
      <FormRow>
        <Input
          type={"text"}
          placeholder={"Имя"}
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type={"date"}
          placeholder={"Дата рождения"}
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <Selector
          placeholder={"Пол"}
          name={"gender"}
          value={gender}
          data={citizens}
          field="gender"
          onChange={(e) => setGender(e.target.value)}
        />
        <Selector
          type={"familyStatus"}
          placeholder={"Семейное положение"}
          value={maritalStatus}
          data={citizens}
          field="general.maritalStatus"
          onChange={(e) => setMaritalStatus(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <Selector
          placeholder={"Гражданство"}
          value={citizenship}
          onChange={(e) => setCitizenship(e.target.value)}
          data={citizens}
          field="general.citizenship"
        />
        <Input
          type={"number"}
          placeholder={"Паспорт"}
          name={"passport"}
          value={passport}
          onChange={(e) => setPassport(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <Input
          type={"number"}
          placeholder={"ИНН"}
          name={"inn"}
          value={inn}
          onChange={(e) => setInn(e.target.value)}
        />
        <Input
          type={"number"}
          placeholder={"Водительское удостоверение"}
          value={driverLicense}
          onChange={(e) => setDriverLicense(e.target.value)}
        />
      </FormRow>

      <FormRow>
        <TextArea
            placeholder="Любимая фраза"
            name="note"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
        />
      </FormRow>

      <FormRow>
        <MultiSelector
          placeholder="Хобби"
          value={citizen.additional.hobbies}
          data={citizens}
          field="additional.hobbies"
        />
      </FormRow>
    </InfoBlock>
  );
};

export default General;
