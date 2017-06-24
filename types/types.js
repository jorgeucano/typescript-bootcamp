// primitivos
var eventName = 'NetConfAr';
var day = 1;
var itToday = true;
// objectos
var workshops = ['TypeScript', 'Xamarin', 'ASP.NET', 'HoloLens'];
var workShopNumber = [1, 2, 3, 4];
//enums
var Workshop;
(function (Workshop) {
    Workshop[Workshop["Typescript"] = 0] = "Typescript";
    Workshop[Workshop["Xamarin"] = 1] = "Xamarin";
    Workshop[Workshop["ASPNET"] = 2] = "ASPNET";
    Workshop[Workshop["HoloLens"] = 3] = "HoloLens";
})(Workshop || (Workshop = {}));
;
var workshopJorge = Workshop.Typescript;
// any => like javascript
var something = 'Jorge Cano - Typescript ';
something = 1;
// functions
// sin return explicito
function setHello(name) {
    // global var
    this.eventName = name;
}
// con return explicito
function getHello() {
    // interpolation
    return "Hola bienvenidos al " + this.eventName;
}
// sin return implicito
function goToConsole(nameFunction) {
    console.log(nameFunction);
}
goToConsole('Hola mi nombre es Jorge y estoy dando un workshop de TypeScript');
setHello('NetConfAr2017');
goToConsole(getHello());
