import { Novedad } from "./novedad";

export interface Novedades {
  //crea un array llamado novedades de tipo novedades (archivo novedad define los tipos de datos)
  novedades: Novedad[];
}

//este componente importa el componente novedad y lo exporta hacia los demas componentes