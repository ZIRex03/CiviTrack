import InfoBlock from "@/components/ui/InfoBlock/InfoBlock";
import ToggleSwitch from "@/components/ui/ToggleSwitch/ToggleSwitch";
import React, { useState } from "react";

const Consents = ({ citizen }) => {
  const [consents, setConsents] = useState(citizen.additional.consents || {});

  const handleChange = (field, value) => {
    setConsents({
      ...consents,
      [field]: value,
    });
  };

  return (
    <InfoBlock title="Согласия">
      <ToggleSwitch
        label="Согласие на обработку персональных данных"
        name="personalData"
        value={consents.personalData || false}
        onChange={(val) => handleChange("personalData", val)}
      />
      <ToggleSwitch
        label="Согласие на получение рассылки"
        name="newsLetter"
        value={consents.newsLetter || false}
        onChange={(val) => handleChange("newsLetter", val)}
      />
      <ToggleSwitch
        label="Согласие на участие в опросах"
        name="survey"
        value={consents.survey || false}
        onChange={(val) => handleChange("survey", val)}
      />
      <ToggleSwitch
        label="Согласие на публикацию фото/видео"
        name="mediaPublication"
        value={consents.mediaPublication || false}
        onChange={(val) => handleChange("mediaPublication", val)}
      />
    </InfoBlock>
  );
};

export default Consents;
