
import {Languages} from "./Languages";
import {NativeName} from "./NativeName";

export interface Country {
  cca3: string,
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: NativeName};
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
  subregion: string;
  tld: string;
  currencies: {
    name:string;
  };
  languages: Languages;
  borders: string[];
}
