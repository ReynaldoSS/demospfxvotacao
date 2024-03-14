import * as React from "react";
import styles from "./VotacaoProjetos.module.scss";
import type { IVotacaoProjetosProps } from "./IVotacaoProjetosProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import axios from "axios";

const VotacaoProjetos: React.FC<IVotacaoProjetosProps> = (props) => {
  const {
    isDarkTheme,
    hasTeamsContext,
    userDisplayName,
    currentSiteUrl,
    spHttpClient,
  } = props;

  const [counter, setCounter] = React.useState<number>(1);
  const [evenOdd, setEvenOdd] = React.useState<string>("");
  const [siteLists, setSiteLists] = React.useState<string[]>([]);

  React.useEffect(() => {
    (async () => {
      const endpoint: string = `${currentSiteUrl}/_api/web/lists?$select=Title&$filter=Hidden eq false&$orderby=Title&$top=10`;
      const rawResponse: SPHttpClientResponse = await spHttpClient.get(
        endpoint,
        SPHttpClient.configurations.v1
      );
      setSiteLists(
        (await rawResponse.json()).value.map((list: { Title: string }) => {
          return list.Title;
        })
      );
    })();
  },[]);

  const onButtonClick = (): void => {
    setCounter(counter + 1);
  };

  React.useEffect(() => {
    setEvenOdd(counter % 2 === 0 ? "even" : "odd");
  }, [counter]);
  return (
    <section
      className={`${styles.votacaoProjetos} ${
        hasTeamsContext ? styles.teams : ""
      }`}
    >
      <div className={styles.welcome}>
        <img
          alt=""
          src={
            isDarkTheme
              ? require("../assets/welcome-dark.png")
              : require("../assets/welcome-light.png")
          }
          className={styles.welcomeImage}
        />
        <h2>Well done, {escape(userDisplayName)}!</h2>
        <div>
          Counter: <strong>{counter}</strong> is <strong>{evenOdd}</strong>
        </div>
        <button onClick={() => onButtonClick()}>+</button>
        <ul>
          {siteLists.map((list:string)=>(<li>{list}</li>))}
        </ul>
      </div>
    </section>
  );
};
export default VotacaoProjetos;
