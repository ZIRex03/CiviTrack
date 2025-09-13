import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from './CitizenCard.module.scss'
import CitizenCardMain from "@/components/layouts/CitizenCardMain/CitizenCardMain";
import CitizenTabBlock from "@/components/layouts/CitizenTabBlock/CitizenTabBlock";

const CitizenCard = () => {
  const { id } = useParams();

  const { citizens } = useSelector(({ citizens }) => citizens);
  const currentCitizen = citizens.find((c) => c.id === Number(id));
  
  return (
    <section className={styles.wrapper}>
      <CitizenCardMain citizen={currentCitizen}/>
      <CitizenTabBlock citizen={currentCitizen}/>
    </section>
  );
};

export default CitizenCard;
