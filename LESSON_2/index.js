let money, time;

function start() {
    money = +prompt("Vash budjet na mesats");
    //time = prompt("Vvedite datu v formate YYYY-MM-DD");

    while(isNaN(money) || money  == "" || money == null) {
        money = +prompt("Vash budjet na mesats?", '');
    }
}
start();

let appData = {
    budjet: money,
    expences: {},
    optionalExper: {},
    income: [],
    timeData: time,
    savings: true
  };

function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Vvedite obyazatelnyyu statuy rashodov: ', ''),
          b = prompt('Vo skolko oboydetsa?', '');
      
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 5) {
          appData.expences[a] = b;
          console.log("Done");
        } else {
          console.log("Else blog");
        }
      }


}
chooseExpences();
appData.moneyPerDay = (appData.budjet / 30).toFixed();

alert('Egednevniy budget: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('Minimalniy yroven dostatka');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Sredniy yroven dostatka');
} else if (appData.moneyPerDay > 2000) {
  console.log('Visokiy yroven dostatka');
} else {
  console.log('Proizoshla oshibka');
}

function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("kakova summa nakopleniy?"),
            percent = +prompt("Pod kakoy procent?");

            appData.monthIncome = save/100/12*percent;
            alert("Doxod v meayac s deposita:b " +appData.monthIncome);

            
    }
    
}
checkSavings();