"use strict";

let ArreyOfDevices = [];

//Холодильник по умолчанию
ArreyOfDevices[0] = new Device ("Холодильник");
ArreyOfDevices[0].addPropInObjSwitch("Питание", new Switch(false));
ArreyOfDevices[0].addPropInObjCustomise("Температура", new Customize(-20, 10, -5));

//Печка по умолчанию
ArreyOfDevices[1] = new Device ("Печка");
ArreyOfDevices[1].addPropInObjSwitch("Питание", new Switch(false));
ArreyOfDevices[1].addPropInObjCustomise("Температура", new Customize(50, 300, 170));
ArreyOfDevices[1].addPropInObjCustomise("Подсветка", new Customize(10, 30, 15));
ArreyOfDevices[1].addPropInObjMode("Режим", new Mode(["Верхний тэн", "Нижний тэн", "Оба тэна", "Конвекция", "Гриль"]));
ArreyOfDevices[1].addPropInObjSwitch("Подсветка", new Switch(false));

//Лампа на кухне по умолчанию
ArreyOfDevices[2] = new Device ("Лампа на кухне");
ArreyOfDevices[2].addPropInObjSwitch("Питание", new Switch(false));
ArreyOfDevices[2].addPropInObjMode("Яркость", new Mode(["Стандартная", "Теплый свет", "Холодный свет"]));

//выводим устройства по умолчанию
for (let itemDevices in ArreyOfDevices){
      viewer(ArreyOfDevices[itemDevices]); 
   }
   
//добавление нового устройства
let indexOfArrAllDevices = ArreyOfDevices.length;
let parentMainDiv = document.body.children[2];
let createDevice = (name, switches, customises, modes) => {
   
   indexOfArrAllDevices = ArreyOfDevices.length;
   ArreyOfDevices[indexOfArrAllDevices] = new Device(name); 
   
   for(let itemSw in switches){
      ArreyOfDevices[indexOfArrAllDevices].addPropInObjSwitch(switches[itemSw].name, new Switch(false));
   }
   for(let itemCus in customises){
      ArreyOfDevices[indexOfArrAllDevices].addPropInObjCustomise(customises[itemCus].name, new Customize(customises[itemCus].min, customises[itemCus].max, customises[itemCus].def));
   }
   for(let itemMod in modes){
      ArreyOfDevices[indexOfArrAllDevices].addPropInObjMode(modes[itemMod].name, new Mode(modes[itemMod].arrModes))
   }
   
   viewer(ArreyOfDevices[indexOfArrAllDevices]);
   indexOfArrAllDevices += 1;
}
