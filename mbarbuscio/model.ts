export module Models {
  export interface IAstromech {
    model: string;
  }

  export interface IShip {
    pilot: string,
    engine: string,
    maxSpeed: number;
    accelerate: any;
  }

  export interface IXwing extends IShip {
    primaryWeapon: string,
    astromech: IAstromech;
    hyperdrive: boolean
  }

  export interface IT70Xwing extends IXwing {
    secondaryWeapon: string,
    title?: string
  }
}
