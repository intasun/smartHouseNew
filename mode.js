"use strict";

//Конструктор режимов
class Mode {
   constructor(modeArr) {
      this._modeArr = modeArr;
      this._modeCurrent = modeArr[0];
   }
   getValue() {
      return this._modeCurrent;
   }
   getAllValues() {
      return this._modeArr;
   }
   setValue(modeArrNum) {
      if (modeArrNum >=0 && modeArrNum <= this._modeArr.length) {
      this._modeCurrent = this._modeArr[modeArrNum];
      }
   }
   toString() {
      return `: ${this._modeCurrent}`;
   }
} 