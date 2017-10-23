"use strict";

//Визуализатор устройств 
let parentDiv = document.body.children[2];

let viewer = (ObjDevices) => {
   let switches = ObjDevices._objSwitch;
   let customises = ObjDevices._objCustomise;
   let modes = ObjDevices._objMode;
   let viewDevice = document.createElement("div");
   viewDevice.setAttribute("name", ObjDevices.getDeviceName() ); 
   //Шапка
   let headSpan = document.createElement("span");
   headSpan.className = "centerText";
   
   let removeInput = document.createElement("input");
   removeInput.type = "button";
   removeInput.className = "right remove";
   removeInput.setAttribute("name", "remove");
   removeInput.value = "x";
   removeInput.onclick = () => {
      let num = ArreyOfDevices.indexOf(ObjDevices); 
      ArreyOfDevices.splice(num, 1); 
      refresh();
   };
   
   let hDevice = document.createElement("h3");
   hDevice.innerHTML = ObjDevices.getDeviceName();
   
   headSpan.appendChild(removeInput);
   headSpan.appendChild(hDevice);
   viewDevice.appendChild(headSpan);
   
    //Свичи
   let nameInputRadio;
   let switchDiv;
   let switchSpanOn;
   let switchSpanCenter;
   let switchSpanOff;
   let switchInputOn;
   let switchLabelInputOn;
   let switchInputOff;
   let switchLabelInputOff;
   for (let switchProp in switches) {
      //див со свичем
      nameInputRadio = ObjDevices.getDeviceName() + switchProp;
      switchDiv = document.createElement("div");
      switchDiv.className = "switch";
      switchDiv.setAttribute("name", switchProp); 
      //спан со свичем для включения
      switchSpanOn = document.createElement("span");
      switchSpanOn.className = "left switchLabel";
      switchSpanOn.setAttribute("name", switchProp);
      switchSpanOff = document.createElement("span");
      switchSpanOff.className = "right switchLabel";
      switchSpanOff.setAttribute("name", switchProp);
      //инпут со свичем вкл
      switchInputOn = document.createElement("input");
      switchInputOn.type = "radio";
      switchInputOn.className = "on-off";
      switchInputOn.setAttribute("name", nameInputRadio); 
      switchInputOn.value = "true";
      switchInputOn.onclick = () => {
         ObjDevices.setSwitchValue(switchProp, true);
         refresh();
      };
      
      switchLabelInputOn = document.createElement("label");
      switchLabelInputOn.htmlFor = switchInputOn;
      switchLabelInputOn.innerHTML = " Вкл";
      //инпут со свичем выкл
      switchInputOff = document.createElement("input");
      switchInputOff.type = "radio";
      switchInputOff.className = "on-off";
      switchInputOff.setAttribute("name", nameInputRadio); 
      switchInputOff.value = "false";
      switchInputOff.onclick = () => {
         ObjDevices.setSwitchValue(switchProp, false);
         refresh();
      };
      switchLabelInputOff = document.createElement("label");
      switchLabelInputOff.htmlFor = switchInputOn;
      switchLabelInputOff.innerHTML = "Выкл ";
      
      if(Object.is(ObjDevices.getSwitchValue(switchProp), true)){
         switchInputOn.setAttribute("checked", "checked"); 
      } else {
         switchInputOff.setAttribute("checked", "checked"); 
      }
      
      //наполняем главный див свичами
      switchSpanCenter = document.createElement("span");
      switchSpanCenter.className = "centerText";
      switchSpanCenter.innerHTML = switchProp;
      switchSpanOn.appendChild(switchInputOn);
      switchSpanOn.appendChild(switchLabelInputOn);
      
      switchSpanOff.appendChild(switchLabelInputOff);
      switchSpanOff.appendChild(switchInputOff);
      switchDiv.appendChild(switchSpanOn);
      switchDiv.appendChild(switchSpanCenter);
      switchDiv.appendChild(switchSpanOff);
      viewDevice.appendChild(switchDiv);
   }; 
   
   //Настройщики
   let valueInputText; 
   let nameDivCustomise;
   let customiseDiv;
   let customiseSpanPrev;
   let customiseSpanNext;
   let customiseSpanVal;
   let customInputPrev;
   let customInputNext;
   let customInputVal;
   let customSpan;
   for (let customProp in customises) {
      valueInputText = customises[customProp].getValue();
      nameDivCustomise = customProp;
      customiseDiv = document.createElement("div");
      customiseDiv.className = "customize";
      customiseDiv.setAttribute("name", nameDivCustomise); 
      //обертка спан для инпута
      customiseSpanPrev = document.createElement("span");
      customiseSpanPrev.setAttribute("name", customProp);
      //инпут настройка prev
      customInputPrev = document.createElement("input");
      customInputPrev.type = "button";
      customInputPrev.className = "left next-prev";
      customInputPrev.setAttribute("name", "customize");
      customInputPrev.value = "-";
      customInputPrev.onclick = () => {
         ObjDevices.customizePrevValue(customProp);
         refresh();
      };
      //обертка спан для инпута
      customiseSpanNext = document.createElement("span");
      customiseSpanNext.setAttribute("name", customProp);
      //инпут настройка next
      customInputNext= document.createElement("input");
      customInputNext.type = "button";
      customInputNext.className = "right next-prev";
      customInputNext.setAttribute("name", "customize");
      customInputNext.value = "+";
      customInputNext.onclick = () => {
         ObjDevices.customizeNextValue(customProp);
         refresh();
      };
      //обертка спан для инпута
      customiseSpanVal = document.createElement("span");
      customiseSpanVal.setAttribute("name", customProp);
      //инпут настройка значения
      customInputVal= document.createElement("input");
      customInputVal.type = "text";
      customInputVal.className = "right";
      customInputVal.setAttribute("name", "text");
      customInputVal.value = valueInputText;
      customInputVal.onblur = (curInp = this) => {
         let curInpValue = curInp.target.value;
         ObjDevices.setCustomizeValue(customProp, curInpValue);
         refresh();
      };
      //спан названия настройщика
      customSpan= document.createElement("span");
      customSpan.className = "centerText";
      customSpan.innerHTML += customProp;
      //наполняем главный див
      customiseSpanPrev.appendChild(customInputPrev);
      customiseSpanNext.appendChild(customInputNext);
      customiseSpanVal.appendChild(customInputVal);
      customiseDiv.appendChild(customiseSpanPrev);
      customiseDiv.appendChild(customiseSpanVal);
      customiseDiv.appendChild(customSpan);
      customiseDiv.appendChild(customiseSpanNext);
      viewDevice.appendChild(customiseDiv);
   };   
   
      //Режимы
   let valueOption;
   let tmpOuter;
   let modeDiv;
   let modeSpan;
   let modeSelect;
   let tmpInner = "";
   for (let modeProp in modes) {
      tmpOuter = modes[modeProp].getAllValues();
      for (let tmpMode in tmpOuter){
         tmpInner  +=  `<option value="${tmpMode}">${tmpOuter[tmpMode]}</option>`
      }
      //див режимов
      modeDiv = document.createElement("div");
      modeDiv.className = "mode";
      //спан режимов
      modeSpan = document.createElement("span");
      modeSpan.className = "centerText";
      modeSpan.innerHTML += modeProp;
      //селект режимов
      modeSelect = document.createElement("select");
      modeSelect.className = "right";
      modeSelect.setAttribute("name", "mode");
      modeSelect.innerHTML += tmpInner;
      modeSelect.onchange = () => {
         let tmpArrMode = ObjDevices.getAllModeValues(modeProp);
         let arrModeIndex = +modeSelect.value;
         ObjDevices.setModeValue(modeProp, arrModeIndex);
         refresh();
      }
      //наполняем главный див
      modeDiv.appendChild(modeSpan);
      modeDiv.appendChild(modeSelect);
      viewDevice.appendChild(modeDiv);
   } 
   
   //Статус
   let statusDiv = document.createElement("div");
   statusDiv.className = "infoStatus";
   let statusSpan = document.createElement("span");
   statusSpan.className = "centerText";
   statusSpan.innerHTML += `<u>Статус:</u><br />${ObjDevices.toString()}`;
   
   statusDiv.appendChild(statusSpan);
   viewDevice.appendChild(statusDiv);
   parentDiv.appendChild(viewDevice);
}

//Обновление экрана
let refresh = () => {
   parentDiv.innerHTML = "";
   for (let itemDevices of ArreyOfDevices){
      viewer(itemDevices); 
   }
}