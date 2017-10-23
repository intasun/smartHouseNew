"use strict";

//Конструктор настройщика
class Customize {
   constructor(minValue, maxValue, curValue) {
      this._customizeMinValue = minValue;
      this._customizeMaxValue = maxValue;
      this._currentValue = curValue;
   } 
   getValue() {
      return this._currentValue;
   }
   nextValue() {
      if (this._currentValue < this._customizeMaxValue) {
         this._currentValue++;
      } else {
         alert("Вы достигли максимального значения");
      }
   }
   prevValue() {
      if (this._currentValue > this._customizeMinValue) {
         this._currentValue--;
      } else {
         alert("Вы достигли минимального значения");
      }
   }
   setValue(value) {
      if (value >= this._customizeMinValue && value <= this._customizeMaxValue) {
         this._currentValue = value;
      } else {
         alert("Вы ввели значение за пределами допустимого");
      }
   }
   toString() {
      return `: ${this._currentValue}`;
   }
}