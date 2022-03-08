﻿import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";


var id = "student_loans";
var name = "Student Loans";
var description = "A theory based on student's t distribution and loaning rho to push your tau";
var authors = "notastalecookie";
var version = 1;

var currency1, currency2;
var c_1, c_2, ;
 //// filler, var ms upgrades
        
var init = () => {
  currency1 = theory.createCurrency();
  ///////////////////
  // Regular Upgrades

  // c_1
{
        let getDesc = (level) => "c_1="getc_1(level).toString(0)
        c_1 = theory.createUpgrade(0, currency2, new FirstFreeCost(new Exponentialcost(15, Math.log2(2))))
        c_1.getDescription = (amount) => Utils.getMath(getDesc(b1.level))
        c_1.getInfo = (amount) => Utils.getMathTo(getDesc(b2.level), getDesc(b2.level + amount));
}
        
  // c_2 
{
        let getDesc = (level) => "c_2=2^{" + level + "}";
        let getInfo = (level) => "c_2=" + getC2(level).toString(0);
        c_2 = theory.createUpgrade(1, currency2, new ExponentialCost(5, Math.log2(10)));
        c_2.getDescription = (_) => Utils.getMath(getDesc(c_2.level));
        c_2.getInfo = (amount) => Utils.getMathTo(getInfo(c_2.level), getInfo(c2.level + amount));
    }

 currency2 = theory.createCurrency();
}
theory.primaryEquationHeight = 120;
var getprimaryEquation = () => {
 let result = "\\dot {\\rho_1} = c_1 * c_2";
        
 return result;
}
    currency1.value += dt * c_1 * c_2;
    currency2.value += currency1.value
var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime);
}


var getc_1 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getc_2 = (level) => BigNumber.TWO.pow(level);
