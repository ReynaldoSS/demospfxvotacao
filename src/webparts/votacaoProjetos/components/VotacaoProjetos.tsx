import * as React from "react";
import styles from "./VotacaoProjetos.module.scss";
import type { IVotacaoProjetosProps } from "./IVotacaoProjetosProps";
import { Rating  } from "@mui/material"; 

const VotacaoProjetos: React.FC<IVotacaoProjetosProps> = (props) => {
  const {} = props;
  const[nota, setNota] = React.useState(0);

  // const ratingOnChange = (value: any): void => {
  //   console.log(value);
  // };
  return (
    <section className={styles.votacaoProjetos}>
      <div className={styles.categoria}>
        <h2>Teste</h2>
        <Rating name="teste-rating" value={nota} onChange={(event, newValue:number)=>{setNota(newValue);console.log(newValue);}} max={10} defaultValue={0}/>
      </div>
    </section>
  );
};
export default VotacaoProjetos;
