// primitivos

var eventName: string = 'NetConfAr';
var day: number = 1;
var itToday: boolean = true;


// objectos

var workshops: Array<string> = ['TypeScript', 'Xamarin', 'ASP.NET', 'HoloLens'];
var workShopNumber: number[] = [1, 2, 3, 4];


//enums

enum Workshop { Typescript, Xamarin, ASPNET, HoloLens};
var workshopJorge = Workshop.Typescript;

// any => like javascript

var something: any = 'Jorge Cano - Typescript ';
something = 1;

// functions

// sin return explicito
function setHello (name: string) : void {
    // global var
    this.eventName = name;
}

// con return explicito
function getHello (): string {
    // interpolation
    return `Hola bienvenidos al ${this.eventName}`;
}

// sin return implicito
function goToConsole(nameFunction:any) {
    console.log(nameFunction);
}

goToConsole('Hola mi nombre es Jorge y estoy dando un workshop de TypeScript');
setHello('NetConfAr2017');
goToConsole(getHello());