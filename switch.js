"use strict";

//Конструктор переключателя
class Switch {
   constructor(value) {
      this._switchValue = value;
   }
   getValue() {
      return this._switchValue;
   }
   setValue(switchValue) {
      if (Object.is(typeof switchValue,"boolean")) {
      this._switchValue = switchValue;
      }
   }
   toString() {
      if (Object.is(this._switchValue, true)) {
         return `: Вкл`;
      } else {
         return `: Выкл`;
      }
   }
}