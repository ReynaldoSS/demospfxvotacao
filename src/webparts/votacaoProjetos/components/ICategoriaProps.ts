import { SPHttpClient } from "@microsoft/sp-http";
import { ICategoria } from "../Entities/ICategoria";
export interface ICategoriaProps {
  currentSiteUrl: string;
  spHttpClient: SPHttpClient;
  categoria:ICategoria;
}
