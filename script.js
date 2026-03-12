
/* LOGIN FUNCTION */
function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;
let id = document.getElementById("userid").value;

/* User database */
let users = [

{username:"Yugi", password:"12345", userid:"2025PECIT666"},
{username:"Arun", password:"22", userid:"2025PECIT777"},
{username:"Karthik", password:"33", userid:"2025PECIT888"},
{username:"Ravi", password:"44", userid:"2025PECIT999"}

];

let validUser = false;

/* Check login */
for(let i=0; i<users.length; i++){

if(user === users[i].username &&
pass === users[i].password &&
id === users[i].userid){

validUser = true;

/* Loading message */
document.getElementById("loginMessage").innerHTML = "⏳ Loading... Please wait....";

/* 2 seconds delay */
setTimeout(function(){

document.getElementById("loginPage").style.display = "none";
document.getElementById("searchPage").style.display = "block";

},2000);

}

}

if(!validUser){
document.getElementById("loginMessage").innerHTML = "❌ Invalid Login";
}

}

/* CRIME SEARCH */

function searchCrime(){

let crime = document.getElementById("crimeInput").value.toLowerCase();
let resultBox = document.getElementById("result");

/* Loading message first */
resultBox.innerHTML = "⏳ Searching...";

/* Delay 2 seconds */
setTimeout(function(){

if(crime === "theft"){
resultBox.innerHTML =
"<b>Crime:</b> Theft <br>\
<b>Category:</b> 🏠 Property Crime <br>\
<b>Section:</b> IPC 378 <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b> Up to 3 years imprisonment";
}

else if(crime === "robbery"){
resultBox.innerHTML =
"<b>Crime:</b> Robbery <br>\
<b>Category:</b> 💰 Property Crime <br>\
<b>Section:</b> IPC 392 <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b> Up to 10 years imprisonment";
}

else if(crime === "cheating"){
resultBox.innerHTML =
"<b>Crime:</b> Cheating <br>\
<b>Category:</b> 💰Property & Financial Crimes<br>\
<b>Section:</b> IPC 415 <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b> 1 years imprisonment";
}

else if(crime === "cheating and dishonestly inducing delivery of property"){
resultBox.innerHTML =
"<b>Crime:</b> Cheating and Dishonestly Inducing Delivery of Property <br>\
<b>Category:</b> 💰Property & Financial Crimes<br>\
<b>Section:</b> IPC 420 <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b> 7 years imprisonment";
}

else if(crime === "using fake currency"){
resultBox.innerHTML =
"<b>Crime:</b> Using Fake Currency <br>\
<b>Category:</b> 💰Property & Financial Crimes<br>\
<b>Section:</b> IPC 489B <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b> Lift time imprisonment";
}

else if(crime === "making fake currency"){
resultBox.innerHTML =
"<b>Crime:</b> Making Fake Currency <br>\
<b>Category:</b> 💰Property & Financial Crimes<br>\
<b>Section:</b> IPC 489D <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b> Lift time imprisonment";
}

else if(crime === "money laundering"){
resultBox.innerHTML =
"<b>Crime:</b> Money Laundering <br>\
<b>Category:</b> 💰Property & Financial Crimes<br>\
<b>Section:</b> Sec 4 <br>\
<b>Law:</b> PMLA <br>\
<b>Act:</b>The Prevention of Money-Laundering Act<br>\
<b>Punishment:</b> 7 Years imprisonment";
}

else if(crime === "bank fraud"){
resultBox.innerHTML =
"<b>Crime:</b> Band Fraud <br>\
<b>Category:</b> 💳 Property & Financial Crimes<br>\
<b>Section:</b> Various<br>\
<b>Law:</b> Banking Law <br>\
<b>Punishment:</b> 10 Years imprisonment";
}

else if(crime === "rape"){
resultBox.innerHTML =
"<b>Crime:</b> Rape <br>\
<b>Category:</b> 👩 Offence Against Women <br>\
<b>Section:</b> IPC 376 <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b>Life time imprisonment";
}

else if(crime === "gange rape"){
resultBox.innerHTML =
"<b>Crime:</b> Gang Rape <br>\
<b>Category:</b> 👩 Offence Against Women <br>\
<b>Section:</b> IPC 376D <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b>Life time imprisonment";
}

else if(crime === "sexual harassment"){
resultBox.innerHTML =
"<b>Crime:</b> Sexual Harassment <br>\
<b>Category:</b> 👩 Offence Against Women <br>\
<b>Section:</b> IPC 354A <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b>3 Years imprisonment";
}

else if(crime === "outraging modesty"){
resultBox.innerHTML =
"<b>Crime:</b> Outraging Modesty <br>\
<b>Category:</b> 👩 Offence Against Women <br>\
<b>Section:</b> IPC 354 <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b>5 Years imprisonment";
}

else if(crime === "cruelty by husband"){
resultBox.innerHTML =
"<b>Crime:</b> Cruelty by Husband <br>\
<b>Category:</b> 👩 Offence Against Women <br>\
<b>Section:</b> IPC 498A <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b>3 Years imprisonment";
}

else if(crime === "dowry demand "){
resultBox.innerHTML =
"<b>Crime:</b> Dowry Demand  <br>\
<b>Category:</b> 👩 Offence Against Women <br>\
<b>Section:</b> DPA 4 <br>\
<b>Law:</b> Dowry Prohibition Act <br>\
<b>Punishment:</b>5 Years imprisonment";
}

else if(crime === "stalking "){
resultBox.innerHTML =
"<b>Crime:</b> Stalking  <br>\
<b>Category:</b> 👩 Offence Against Women <br>\
<b>Section:</b> IPC354D <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b>5 Years imprisonment";
}

else if(crime === "rape by police officer"){
resultBox.innerHTML =
"<b>Crime:</b> Rape by Police Officer  <br>\
<b>Category:</b> 👩 Offence Against Women <br>\
<b>Section:</b> IPC376(2) <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b> Life time imprisonment";
}

else if(crime === "rape causing death"){
resultBox.innerHTML =
"<b>Crime:</b> Rape Causing Death  <br>\
<b>Category:</b> 👩 Offence Against Women <br>\
<b>Section:</b> IPC 376A <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b> Death or Life time imprisonment";
}

else if(crime === "abetment of suicide of woman"){
resultBox.innerHTML =
"<b>Crime:</b> Abetment of Suicide of Woman <br>\
<b>Category:</b> 👩 Offence Against Women <br>\
<b>Section:</b> IPC 306 <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b>  10 years imprisonment";
}

else if(crime === "selling minor for prostitution"){
resultBox.innerHTML =
"<b>Crime:</b> Selling Minor for Prostitution <br>\
<b>Category:</b> 👶  Offence Against Children <br>\
<b>Section:</b> IPC 372 <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b>  10 years imprisonment";
}

else if(crime === "buying minor for prostitution"){
resultBox.innerHTML =
"<b>Crime:</b> Buying Minor for Prostitution <br>\
<b>Category:</b> 👶  Offence Against Children <br>\
<b>Section:</b> IPC 373 <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b>  10 years imprisonment";
}

else if(crime === "child trafficking"){
resultBox.innerHTML =
"<b>Crime:</b>Child Trafficking <br>\
<b>Category:</b> 👶  Offence Against Children <br>\
<b>Section:</b> IPC 370 <br>\
<b>Law:</b> Indian Penal Code <br>\
<b>Punishment:</b>  Life time imprisonment";
}

else if(crime === "penetrative sexual assault"){
resultBox.innerHTML =
"<b>Crime:</b>Penetrative Sexual Assault <br>\
<b>Category:</b> 🛡️👶  Offence Against Children <br>\
<b>Section:</b> SEC 5 <br>\
<b>Act:</b>POCSO Act <br>\
<b>Law:</b> Protection of Children from Sexual Offences Act <br>\
<b>Punishment:</b>  Life time imprisonment or Death";
}

else if(crime === "sexual assault on child"){
resultBox.innerHTML =
"<b>Crime:</b>Sexual Assault on Child<br>\
<b>Category:</b> 🛡️👶  Offence Against Children <br>\
<b>Section:</b> SEC 7 <br>\
<b>Act:</b>POCSO Act <br>\
<b>Law:</b> Protection of Children from Sexual Offences Act <br>\
<b>Punishment:</b>  5 Years imprisonment";
}

else if(crime === "sexual harassment of child"){
resultBox.innerHTML =
"<b>Crime:</b>Sexual Harassment of Child<br>\
<b>Category:</b> 🛡️👶  Offence Against Children <br>\
<b>Section:</b> SEC 11 <br>\
<b>Act:</b>POCSO Act <br>\
<b>Law:</b> Protection of Children from Sexual Offences Act <br>\
<b>Punishment:</b>  3 Years imprisonment";
}

else if(crime === "use of child for pornography"){
resultBox.innerHTML =
"<b>Crime:</b>Use of Child for Pornography<br>\
<b>Category:</b> 🛡️👶  Offence Against Children <br>\
<b>Section:</b> SEC 14 <br>\
<b>Act:</b>POCSO Act <br>\
<b>Law:</b> Protection of Children from Sexual Offences Act <br>\
<b>Punishment:</b>  7 Years imprisonment";
}

else if(crime === "attempt to commit POCSO offence"){
resultBox.innerHTML =
"<b>Crime:</b>Attempt to Commit POCSO Offence<br>\
<b>Category:</b> 🛡️👶  Offence Against Children <br>\
<b>Section:</b> SEC 18 <br>\
<b>Act:</b>POCSO Act <br>\
<b>Law:</b> Protection of Children from Sexual Offences Act <br>\
<b>Punishment:</b>  Half of the Punishment";
}

else if(crime === "child marriage"){
resultBox.innerHTML =
"<b>Crime:</b>Child Marriage<br>\
<b>Category:</b> 🛡️👶  Offence Against Children <br>\
<b>Section:</b> SEC 9 <br>\
<b>Act:</b>POMA Act <br>\
<b>Law:</b> Prohibition of Child Marriage Act <br>\
<b>Punishment:</b>  7 Years imprisonment";
}

else if(crime === "child labour"){
resultBox.innerHTML =
"<b>Crime:</b>Child Labour<br>\
<b>Category:</b> 🛡️  Offence Against Children <br>\
<b>Section:</b> SEC 3 <br>\
<b>Act:</b> Child Labour Act <br>\
<b>Law:</b> Prohibition of Child Marriage Act <br>\
<b>Punishment:</b>  2 Years imprisonment";
}

else if(crime === "hacking computer system"){
resultBox.innerHTML =
"<b>Crime:</b>Hacking Computer System<br>\
<b>Category:</b> 💻   Cyber Crime <br>\
<b>Section:</b> SEC 66 <br>\
<b>Law:</b>IT Act<br>\
<b>Punishment:</b>  3 Years imprisonment";
}

else if(crime === "cheating by personation using computer"){
resultBox.innerHTML =
"<b>Crime:</b>Cheating by Personation using Computer<br>\
<b>Category:</b> 💻   Cyber Crime <br>\
<b>Section:</b> SEC 66D <br>\
<b>Law:</b>IT Act<br>\
<b>Punishment:</b>  3 Years imprisonment";
}

else if(crime === "cyber terrorism"){
resultBox.innerHTML =
"<b>Crime:</b>Cyber Terrorism<br>\
<b>Category:</b> 💻   Cyber Crime <br>\
<b>Section:</b> SEC 66F <br>\
<b>Law:</b>IT Act<br>\
<b>Punishment:</b>  Lift Time imprisonment";
}

else if(crime === "child pornography online"){
resultBox.innerHTML =
"<b>Crime:</b>Child Pornography Online<br>\
<b>Category:</b> 💻   Cyber Crime <br>\
<b>Section:</b> SEC 67B <br>\
<b>Law:</b>IT Act<br>\
<b>Punishment:</b>  3 Years imprisonment";
}

else if(crime === "online banking fraud"){
resultBox.innerHTML =
"<b>Crime:</b>Online Banking Fraud<br>\
<b>Category:</b> 💻   Cyber Crime <br>\
<b>Section:</b> SEC 66 <br>\
<b>Law:</b>IT Act<br>\
<b>Punishment:</b>  3 Years imprisonment";
}

else if(crime === "spreading virus"){
resultBox.innerHTML =
"<b>Crime:</b>Spreading Virus<br>\
<b>Category:</b> 💻 Cyber Crime <br>\
<b>Section:</b> SEC 43 <br>\
<b>Law:</b>IT Act<br>\
<b>Punishment:</b>  3 Years imprisonment";
}

else if(crime === "data theft"){
resultBox.innerHTML =
"<b>Crime:</b>Data Theft / Virus<br>\
<b>Category:</b> 💻   Cyber Crime <br>\
<b>Section:</b> SEC 43 <br>\
<b>Law:</b>IT Act<br>\
<b>Punishment:</b>  3 Years imprisonment";
}

else if(crime === "online blackmail"){
resultBox.innerHTML =
"<b>Crime:</b>Online Blackmail<br>\
<b>Category:</b> 💻  Cyber Crime <br>\
<b>Section:</b>IPC  SEC 503 <br>\
<b>Law:</b>Indian Penal Code<br>\
<b>Punishment:</b>  3 Years imprisonment";
}

else{
resultBox.innerHTML = "❌ Crime not found or Check the spelling";
}

},2000);  // 2000 ms = 2 seconds

}