let money = +prompt("Vash budjet na mesats"),
  time = prompt("Vvedite datu v formate YYYY-MM-DD");

let appData = {
  budjet: money,
  experance: {},
  optionalExper: {},
  income: [],
  timeData: time,
  saving: false
};

// let a1 = prompt("Vvedite obyazatelnyyu statuy rashodov: "),
//   a2 = prompt("Vo skolko oboydetsa?"),
//   a3 = prompt("Vvedite obyazatelnyyu statuy rashodov: "),
//   a4 = prompt("Vo skolko oboydetsa?");

// appData.experance.a1 = a2;
// appData.experance.a3 = a4;

for (let i = 0; i < 2; i++) {
  let a = prompt('Vvedite obyazatelnyyu statuy rashodov: ', ''),
    b = prompt('Vo skolko oboydetsa?', '');

    if ( (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null && 
    a != ''  && b != '' && a.length <50) {
        console.log ("done");
        appData.experance[a] = b;
    }else {


    }
 

}
appData.moneyPerDay = appData.budjet / 30;

alert ("Ежедневный бюджет: "+ appData.moneyPerDay);

if(appData.moneyPerDay <100 ) {
console.log ("Минимальный уровень достатка");

} else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
    console.log("средний уровень достатка");
} else if (appData.moneyPerDay >2000) {
    console.log("высокий уровень достатка");
}else {
console.log ("Произошла ошибка");
}