export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
}
