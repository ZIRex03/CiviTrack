import React, { useRef, useState, useEffect } from "react";

import styles from "./CitizenTabBlock.module.scss";
import Input from "@/components/ui/Input/Input";
import Selector from "@/components/ui/Selector/Selector";
import TextArea from "@/components/ui/TextArea/TextArea";
import CitizenGeneralTab from "@/components/layouts/CitizenGeneralTab/CitizenGeneralTab";
import CitizenEmploymentTab from "@/components/layouts/CitizenEmploymentTab/CitizenEmploymentTab";
import CitizenEducationTab from "@/components/layouts/CitizenEducationTab/CitizenEducationTab";
import CitizenHealthTab from "@/components/layouts/CitizenHealthTab/CitizenHealthTab";
import CitizenFamilyTab from "@/components/layouts/CitizenFamilyTab/CitizenFamilyTab";

const tabs = [
  {
    id: "general",
    title: "Общее",
    component: (props) => <CitizenGeneralTab {...props} />,
  },
  {
    id: "work",
    title: "Работа",
    component: (props) => <CitizenEmploymentTab {...props} />,
  },
  {
    id: "education",
    title: "Образование",
    component: (props) => <CitizenEducationTab {...props} />,
  },
  {
    id: "health",
    title: "Здоровье",
    component: (props) => <CitizenHealthTab {...props} />,
  },
  {
    id: "family",
    title: "Семья",
    component: (props) => <CitizenFamilyTab {...props} />,
  },
];

const CitizenTabBlock = ({ citizen }) => {
  const [isTab, setIsTab] = useState("general");
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={containerRef} className={styles.scrollContainer}>
        <div className={styles.tabBlock}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setIsTab(tab.id)}
              className={`${styles.tabButton} ${
                isTab === tab.id ? styles.active : ""
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        {tabs.find((tab) => tab.id === isTab).component({ citizen })}
      </div>
    </div>
  );
};

export default CitizenTabBlock;
