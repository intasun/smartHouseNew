"use strict";

//Сборщик
class Device {
   constructor(name){
      this._name = name;
      this._objSwitch = {};
      this._objCustomise = {};
      this._objMode = {};
   }
   getDeviceName(){
      return this._name;
   }
   addPropInObjSwitch(name, newSwitch){
      this._objSwitch[name] = newSwitch;
      return this._objSwitch;
   }
   addPropInObjCustomise(name, newCustomise){
      this._objCustomise[name] = newCustomise;
      return this._objCustomise;
   }
   addPropInObjMode(name, newMode){
      this._objMode[name] = newMode;
      return this._objMode;
   }
   getSwitchValue(name){
      return this._objSwitch[name].getValue();
   }
   setSwitchValue(name, value){
      return this._objSwitch[name].setValue(value);
   }
   getCustomizeValue(name){
      return this._objCustomise[name].getValue();
   }
   setCustomizeValue(name, value){
      value = +value;
      return this._objCustomise[name].setValue(value);
   }
   customizeNextValue(name){
      return this._objCustomise[name].nextValue();
   }
   customizePrevValue(name){
      return this._objCustomise[name].prevValue();
   }
   getModeValue(name){
      return this._objMode[name].getValue();
   } 
   getAllModeValues(name){
      return this._objMode[name].getAllValues();
   } 
   setModeValue(name, propNum){
      return this._objMode[name].setValue(propNum);
   }  
   toString(){
      let statusOfDevice = "";
      for (let eachSwitch in this._objSwitch){
         statusOfDevice += `${eachSwitch}${this._objSwitch[eachSwitch].toString()}<br />`;
      }
      for (let eachCustomise in this._objCustomise){
         statusOfDevice += `${eachCustomise}${this._objCustomise[eachCustomise].toString()}<br />`;
      }
      for (let eachMode in this._objMode){
         statusOfDevice += `${eachMode}${this._objMode[eachMode].toString()}<br />`;
      }
      return statusOfDevice;
   }
}