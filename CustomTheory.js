import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";

var id = "student_loans";
var name = "Student Loans";
var description = "A theory based on student's t distribution and loaning rho to push your tau.";
var authors = "notastalecookie";
var version = 0;

var currency1, currency2;
var c1, c2, ;
var c1Exp, c2Exp;
        
var init = () => {
    currency1 = theory.createCurrency();
    currency2 = theory.createCurrency();
theory.primaryEquationHeight = 120
var getprimaryEquation = () => {
        let result = "\\dot {\\rho_1} = c_1 * c_2
