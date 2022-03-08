import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";


var id = "student_loans101";
var name = "Student Loans";
var description = "A theory based on student's t distribution and loaning rho to push your tau";
var authors = "notastalecookie";
var version = 1;

var currency1, currency2;
var c_1, c_2;
 //// filler, var ms upgrades
        
var init = () => {
  currency1 = theory.createCurrency();
  currency2 = theory.createCurrency();
  ///////////////////
  // Regular Upgrades

 /// PASTE HERE
    theory.createPublicationUpgrade(0, currency2, 1e9);
    theory.createBuyAllUpgrade(1, currency2, 1e13);
    theory.createAutoBuyerUpgrade(2, currency2, 1e30);

 
 theory.primaryEquationHeight = 5;
}

var getprimaryEquation = () => {
 let result = "\\dot {\\rho_1} = c_1 * c_2";
        
 return result;
}



var tick = (elapsedTime, multiplier) => {
 
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
 
    currency1.value += dt * bonus * c_1 * c_2;
    currency2.value += currency1.value;
}

var getPublicationMultiplier = (tau) => tau.pow(0.147) * BigNumber.THREE;
var getPublicationMultiplierFormula = (symbol) => "3{" + symbol + "}^{1.47}";
var getc_1 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getc_2 = (level) => BigNumber.TWO.pow(level);
var getTau = () => currency1.value^0.1;


 init();
