"use strict";

//форма выключателей
let numberOfSwitches = document.getElementById("numberOfSwitches");
numberOfSwitches.onclick = () => {
   let firstNameOfSwitch = document.getElementById("firstNameOfSwitch");
   let secondNameOfSwitch = document.getElementById("secondNameOfSwitch");
   let thirdNameOfSwitch = document.getElementById("thirdNameOfSwitch");
      switch (+numberOfSwitches.value) {
         case 0:
            firstNameOfSwitch.style.display = "none";
            firstNameOfSwitch.value = "";
            secondNameOfSwitch.style.display = "none";
            secondNameOfSwitch.value = "";
            thirdNameOfSwitch.style.display = "none";
            thirdNameOfSwitch.value = "";
            break;
         case 1:
            firstNameOfSwitch.style.display = "block";
            secondNameOfSwitch.style.display = "none";
            secondNameOfSwitch.value = "";
            thirdNameOfSwitch.style.display = "none";
            thirdNameOfSwitch.value = "";
            break;
         case 2:
            firstNameOfSwitch.style.display = "block";
            secondNameOfSwitch.style.display = "block";
            thirdNameOfSwitch.style.display = "none";
            thirdNameOfSwitch.value = "";
            break;
         case 3:
            firstNameOfSwitch.style.display = "block";
            secondNameOfSwitch.style.display = "block";
            thirdNameOfSwitch.style.display = "block";
            break;
      }
}

//форма настройщиков
let numberOfCustomizes = document.getElementById("numberOfCustomizes");
numberOfCustomizes.onclick = () => {
   let firstNameOfCustomizes = document.getElementById("firstNameOfCustomizes");
   let firstNameOfCustomizesValues = document.getElementById("firstNameOfCustomizesValues");
   let secondNameOfCustomizes = document.getElementById("secondNameOfCustomizes");
   let secondNameOfCustomizesValues = document.getElementById("secondNameOfCustomizesValues");
   let thirdNameOfCustomizes = document.getElementById("thirdNameOfCustomizes");
   let thirdNameOfCustomizesValues = document.getElementById("thirdNameOfCustomizesValues");
   
      switch (+numberOfCustomizes.value) {
         case 0:
            firstNameOfCustomizes.style.display = "none";
            firstNameOfCustomizes.value = "";
            firstNameOfCustomizesValues.style.display = "none";
            firstNameOfCustomizesValues.children[0].value = "";
            firstNameOfCustomizesValues.children[1].value = "";
            firstNameOfCustomizesValues.children[2].value = "";
            secondNameOfCustomizes.style.display = "none";
            secondNameOfCustomizes.value = "";
            secondNameOfCustomizesValues.style.display = "none";
            secondNameOfCustomizesValues.children[0].value = "";
            secondNameOfCustomizesValues.children[1].value = "";
            secondNameOfCustomizesValues.children[2].value = "";
            thirdNameOfCustomizes.style.display = "none";
            thirdNameOfCustomizes.value = "";
            thirdNameOfCustomizesValues.style.display = "none";
            thirdNameOfCustomizesValues.children[0].value = "";
            thirdNameOfCustomizesValues.children[1].value = "";
            thirdNameOfCustomizesValues.children[2].value = "";
            break;
         case 1:
            firstNameOfCustomizes.style.display = "block";
            firstNameOfCustomizesValues.style.display = "block";
            secondNameOfCustomizes.style.display = "none";
            secondNameOfCustomizes.value = "";
            secondNameOfCustomizesValues.style.display = "none";
            secondNameOfCustomizesValues.children[0].value = "";
            secondNameOfCustomizesValues.children[1].value = "";
            secondNameOfCustomizesValues.children[2].value = "";
            thirdNameOfCustomizes.style.display = "none";
            thirdNameOfCustomizes.value = "";
            thirdNameOfCustomizesValues.style.display = "none";
            thirdNameOfCustomizesValues.children[0].value = "";
            thirdNameOfCustomizesValues.children[1].value = "";
            thirdNameOfCustomizesValues.children[2].value = "";
            break;
         case 2:
            firstNameOfCustomizes.style.display = "block";
            firstNameOfCustomizesValues.style.display = "block";
            secondNameOfCustomizes.style.display = "block";
            secondNameOfCustomizesValues.style.display = "block";
            thirdNameOfCustomizes.style.display = "none";
            thirdNameOfCustomizes.value = "";
            thirdNameOfCustomizesValues.style.display = "none";
            thirdNameOfCustomizesValues.children[0].value = "";
            thirdNameOfCustomizesValues.children[1].value = "";
            thirdNameOfCustomizesValues.children[2].value = "";
            break;
         case 3:
            firstNameOfCustomizes.style.display = "block";
            firstNameOfCustomizesValues.style.display = "block";
            secondNameOfCustomizes.style.display = "block";
            secondNameOfCustomizesValues.style.display = "block";
            thirdNameOfCustomizes.style.display = "block";
            thirdNameOfCustomizesValues.style.display = "block";
            break;
      }
}

//форма режимов
let numberOfModes = document.getElementById("numberOfModes");
numberOfModes.onclick = () => {
   let firstNameOfModes = document.getElementById("firstNameOfModes");
   let secondNameOfModes = document.getElementById("secondNameOfModes");
   let thirdNameOfModes = document.getElementById("thirdNameOfModes");
   let fourthNameOfModes = document.getElementById("fourthNameOfModes");
   let fifthNameOfModes = document.getElementById("fifthNameOfModes");
   let sixthNameOfModes = document.getElementById("sixthNameOfModes");
   let seventhNameOfModes = document.getElementById("seventhNameOfModes");
      switch (+numberOfModes.value) {
         case 0:
            firstNameOfModes.style.display = "none";
            firstNameOfModes.value = "";
            secondNameOfModes.style.display = "none";
            secondNameOfModes.value = "";
            thirdNameOfModes.style.display = "none";
            thirdNameOfModes.value = "";
            fourthNameOfModes.style.display = "none";
            fourthNameOfModes.value = "";
            fifthNameOfModes.style.display = "none";
            fifthNameOfModes.value = "";
            sixthNameOfModes.style.display = "none";
            sixthNameOfModes.value = "";
            seventhNameOfModes.style.display = "none";
            seventhNameOfModes.value = "";
            break;
         case 1:
            firstNameOfModes.style.display = "block";
            secondNameOfModes.style.display = "none";
            secondNameOfModes.value = "";
            thirdNameOfModes.style.display = "none";
            thirdNameOfModes.value = "";
            fourthNameOfModes.style.display = "none";
            fourthNameOfModes.value = "";
            fifthNameOfModes.style.display = "none";
            fifthNameOfModes.value = "";
            sixthNameOfModes.style.display = "none";
            sixthNameOfModes.value = "";
            seventhNameOfModes.style.display = "none";
            seventhNameOfModes.value = "";
            break;
         case 2:
            firstNameOfModes.style.display = "block";
            secondNameOfModes.style.display = "block";
            thirdNameOfModes.style.display = "none";
            thirdNameOfModes.value = "";
            fourthNameOfModes.style.display = "none";
            fourthNameOfModes.value = "";
            fifthNameOfModes.style.display = "none";
            fifthNameOfModes.value = "";
            sixthNameOfModes.style.display = "none";
            sixthNameOfModes.value = "";
            seventhNameOfModes.style.display = "none";
            seventhNameOfModes.value = "";
            break;
         case 3:
            firstNameOfModes.style.display = "block";
            secondNameOfModes.style.display = "block";
            thirdNameOfModes.style.display = "block";
            fourthNameOfModes.style.display = "none";
            fourthNameOfModes.value = "";
            fifthNameOfModes.style.display = "none";
            fifthNameOfModes.value = "";
            sixthNameOfModes.style.display = "none";
            sixthNameOfModes.value = "";
            seventhNameOfModes.style.display = "none";
            seventhNameOfModes.value = "";
            break;
         case 4:
            firstNameOfModes.style.display = "block";
            secondNameOfModes.style.display = "block";
            thirdNameOfModes.style.display = "block";
            fourthNameOfModes.style.display = "block";
            fifthNameOfModes.style.display = "none";
            fifthNameOfModes.value = "";
            sixthNameOfModes.style.display = "none";
            sixthNameOfModes.value = "";
            seventhNameOfModes.style.display = "none";
            seventhNameOfModes.value = "";
            break;
         case 5:
            firstNameOfModes.style.display = "block";
            secondNameOfModes.style.display = "block";
            thirdNameOfModes.style.display = "block";
            fourthNameOfModes.style.display = "block";
            fifthNameOfModes.style.display = "block";
            sixthNameOfModes.style.display = "none";
            sixthNameOfModes.value = "";
            seventhNameOfModes.style.display = "none";
            seventhNameOfModes.value = "";
            break;
         case 6:
            firstNameOfModes.style.display = "block";
            secondNameOfModes.style.display = "block";
            thirdNameOfModes.style.display = "block";
            fourthNameOfModes.style.display = "block";
            fifthNameOfModes.style.display = "block";
            sixthNameOfModes.style.display = "block";
            seventhNameOfModes.style.display = "none";
            seventhNameOfModes.value = "";
            break;
         case 7:
            firstNameOfModes.style.display = "block";
            secondNameOfModes.style.display = "block";
            thirdNameOfModes.style.display = "block";
            fourthNameOfModes.style.display = "block";
            fifthNameOfModes.style.display = "block";
            sixthNameOfModes.style.display = "block";
            seventhNameOfModes.style.display = "block";
            break;
      }
} 
//Добавления устройства
let addDeviceBatton = document.getElementById("addDeviceBatton");
addDeviceBatton.onclick = () => {
   //Проверка имени на дубль
   let nameDev = document.getElementById("nameDevice").value
   let duble = false;
   for (let dev in ArreyOfDevices){
      if (Object.is(ArreyOfDevices[dev].getDeviceName(), nameDev)){
         duble = true;
      }   
   } 
   if (Object.is(duble,true)){
      alert("Устройство с таким названием уже добавлено");
   } else if (Object.is(nameDev, "")) {
      alert("Укажите название устройства");
   } else {
       //Свичи
      let switchesDev = [];
      let numberOfSwitches = document.getElementById("numberOfSwitches").value;
      let inpNameOfSwitch = document.getElementsByName("nameOfSwitch");
      for(let i = 0; i < numberOfSwitches; i++){
         switchesDev.push({name: inpNameOfSwitch[i].value});
      }
      //Настройщики
      let customisesDev = [];
      let numberOfCustomizes = document.getElementById("numberOfCustomizes").value;
      let inpNameOfCustomize = document.getElementsByName("nameOfCustomizes");
      let inpNameOfCustomizeMin = document.getElementsByName("nameOfCustomizesMin");
      let inpNameOfCustomizeMax = document.getElementsByName("nameOfCustomizesMax");
      let inpNameOfCustomizeDef = document.getElementsByName("nameOfCustomizesDef");
      for(let i = 0; i < numberOfCustomizes; i++){
         customisesDev.push({name: inpNameOfCustomize[i].value,
                             min: inpNameOfCustomizeMin[i].value,
                             max: inpNameOfCustomizeMax[i].value,
                             def: inpNameOfCustomizeDef[i].value});
      }
      //Режимы
      let modesDev = [];
      let namesOfModes = [];
      let numberOfModes = 1;
      let inpNameOfMode = "Режим";
      for(let i = 0; i < document.getElementById("numberOfModes").value; i++){
         namesOfModes.push(document.getElementsByName("nameOfModes")[i].value);
      }
      if(namesOfModes.length > 0){
         modesDev.push({name: inpNameOfMode,
                        arrModes: namesOfModes});
      }
      //Объединяем в одно устройство
      createDevice(nameDev, switchesDev, customisesDev, modesDev);
      cleanerForm();
   } 
}

//очищение формы добавления
let cleanerForm = () => {
   document.getElementById("nameDevice").value = "";
   document.getElementById("numberOfSwitches").value = "0";
   document.getElementById("firstNameOfSwitch").value = "";
   document.getElementById("secondNameOfSwitch").value = "";
   document.getElementById("thirdNameOfSwitch").value = "";
   document.getElementById("numberOfCustomizes").value = "0";
   document.getElementById("firstNameOfCustomizes").value = "";
   document.getElementById("firstNameOfCustomizesValues").children[0].value = "";
   document.getElementById("firstNameOfCustomizesValues").children[1].value = "";
   document.getElementById("firstNameOfCustomizesValues").children[2].value = "";
   document.getElementById("secondNameOfCustomizes").value = "";
   document.getElementById("secondNameOfCustomizesValues").children[0].value = "";
   document.getElementById("secondNameOfCustomizesValues").children[1].value = "";
   document.getElementById("secondNameOfCustomizesValues").children[2].value = "";
   document.getElementById("thirdNameOfCustomizes").value = "";
   document.getElementById("thirdNameOfCustomizesValues").children[0].value = "";
   document.getElementById("thirdNameOfCustomizesValues").children[1].value = "";
   document.getElementById("thirdNameOfCustomizesValues").children[2].value = "";
   document.getElementById("numberOfModes").value = "0";
   document.getElementById("firstNameOfModes").value = "";
   document.getElementById("secondNameOfModes").value = "";
   document.getElementById("thirdNameOfModes").value = "";
   document.getElementById("fourthNameOfModes").value = "";
   document.getElementById("fifthNameOfModes").value = "";
   document.getElementById("sixthNameOfModes").value = "";
   document.getElementById("seventhNameOfModes").value = "";
   
   //скрываем ненужные поля
   let dinamicTextForm = document.querySelectorAll('.dinamicForm > input[type="text"], #firstNameOfCustomizesValues, #secondNameOfCustomizesValues, #thirdNameOfCustomizesValues');
   dinamicTextForm.forEach(hideElemForm); 
}

let hideElemForm = (elem) => {
   elem.style.display = "none";
}
