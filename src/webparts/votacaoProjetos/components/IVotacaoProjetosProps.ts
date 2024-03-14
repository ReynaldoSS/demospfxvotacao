import { SPHttpClient } from "@microsoft/sp-http";
export interface IVotacaoProjetosProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  currentSiteUrl:string;
  spHttpClient:SPHttpClient;
}
