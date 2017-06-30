import { Models } from './model';
import { pilotReport } from './decorator';

export module Classes {
  export class Ship implements Models.IShip {

    constructor(pilot: string, engine: string, maxSpeed: number) {
      this.pilot = pilot;
      this.engine = engine;
      this.maxSpeed = maxSpeed;
      this.speed = 0;
    }

    pilot: string;
    engine: string;
    maxSpeed: number;

    private speed: number;

    accelerate: any = ():void => {
      this._accelerate(1.1);
    }

    protected _accelerate: any = (multiplier: number): void => {
      var i = setInterval(() => {
        if(this.speed < this.maxSpeed){
          this.speed = (this.speed + 1) * multiplier;
          console.log(`${this.pilot} is flying at ${this.speed} kph`);
        } else {
          console.log(`${this.pilot} is flying at max speed`);
          clearInterval(i);
        }
      }, 500);
    }
  }

  export class Xwing extends Ship implements Models.IXwing {

    constructor(pilot: string, astromech: string) {
      super(pilot, '4L4 Fusial Thrust Engine', 1050);
      this.primaryWeapon = 'Ion Cannon'
      this.astromech = { model: astromech };
      this.hyperdrive = true;
    }

    primaryWeapon: string;
    astromech: Models.IAstromech;
    hyperdrive: boolean;

  }

  @pilotReport
  export class T65Xwing extends Xwing implements Models.IXwing {

    constructor(pilot: string, astromech: string){
      super(pilot, astromech);
    }

    accelerate: any = () => {
      this._accelerate(1.25);
    }
  }

  @pilotReport
  export class T70XWing extends Xwing implements Models.IT70Xwing {

    constructor(pilot: string, astromech: string, title?: string){
      super(pilot, astromech);
      this.engine = '5L5 Fusial Thrust Engine';
      this.primaryWeapon = 'KX12 Laser Cannon';
      this.secondaryWeapon = 'Proton Torpedoes';
      title ? this.title = title : this.title = 'none';
    }
      
    secondaryWeapon: string;
    title?: string;

    accelerate: any = () => {
      this._accelerate(1.4);
    }
  }
}