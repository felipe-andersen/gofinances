
// Very good :)

interface CarParam1 {
  model?: string;
  year?: number;
}

interface CarProps1 {
  automovel?: string;
  factoryYear?: number | undefined
};

export class Exemple1Car implements CarProps1 {
  automovel
  factoryYear

  constructor( model?: string, year?: number ) {
    this.automovel = model;
    this.factoryYear = year;
    return this
  }
};

interface EquipamentParam {
    name?: string
  }

interface EquipamentProps {
  equipament: string | undefined
}

export class Equipament implements EquipamentProps {
  equipament

  constructor( name?: string ) {
    this.equipament = name;
    return this
    }
};

const Jon = new Exemple1Car( "BMW", 2022 );


 // === :( ===

interface CarProps2 {
  automovel?: string | undefined;
  factoryYear?: string | undefined;
};
    
export class Exemple2Car implements CarProps2 {
  automovel
  factoryYear
 
  constructor( year? : string, model?: string ) {
    this.automovel = model;
    this.factoryYear = year;
    return this
  }

  Equipament( name: string ) {
    let equipament = name;
    return { equipament }
  }
};

    
