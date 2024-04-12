function reg(){
    window.location="./Register.html"
}
function log(){
    window.location="./login.html"
}
function sign(){
    window.location="./index.html"
}
function signup(){
    window.location="./Register.html"
}
function register(){
    
    uname=reg_name.value
    acno=reg_acno.value
    pswd=reg_pswd.value
   

console.log(acno,uname,pswd);

// 2.create acnodetails in object

accountDetails={
    acno,
    uname,
    pswd,
    balance:0
}

//3.check if acno is already present
if(acno in localStorage){
    alert("User already registered");
}

//To set details in localstorage
else{
    localStorage.setItem(acno, JSON.stringify(accountDetails))
    alert("Registration successful")

    window.location="./login.html"
}
}

function login(){
    //fetch details
    acno=login_acno.value
    pswd=login_pswd.value
    console.log(acno,pswd);

    if(acno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(acno))
        if(pswd==accountDetails.pswd){
          alert("login successful");
          window.location="./deposit.html"
        }
        else{
            alert("incorrect password");
        }
    }else{
        alert("invalid account number");
    }
}

//Deposit
let amnt = 0;
let withdraw = 0;
let totalBalance = 0;

function depositMoney(){
   amnt=deposit_amnt.value;
   acno=deposit_acno.value;
   amnt = Math.floor(amnt);

   if(acno in localStorage){
    accountDetails=JSON.parse(localStorage.getItem(acno))
    if(acno==accountDetails.acno && amnt <=0){
        alert("value cannot be empty or negative")
    }
   else{
    accountDetails.balance +=amnt;
    localStorage.setItem(acno, JSON.stringify(accountDetails));

    alert("Your amount is successfully added");
    document.getElementById("balance_amnt").innerHTML=`<div style="color:red;" "font-weight:500">Your current balance is ${accountDetails.balance} </div>`
   }
}else{
    alert("Invalid account number");
}
}
function withdrawMoney(){
    withdraw=withdraw_amnt.value
    acno=withdraw_acno.value
    withdraw=Math.floor(withdraw)

    if(acno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(acno))
        if(acno==accountDetails.acno && withdraw <= 0 ){
            alert("value cannot be empty or negative")
        }
        else if(withdraw > accountDetails.balance){
            alert("Insufficient funds...!")
        }else{
            alert("bank balance before withdrawal: " +accountDetails.balance)
            alert("withdrawal amount: " + withdraw);

            accountDetails.balance -= withdraw;
            alert("your amount is successfully withdrwan")
            localStorage.setItem(acno ,JSON.stringify(accountDetails));

            alert("After withdrawal balance : " +accountDetails.balance)
            document.getElementById("bal_amnt").innerHTML=`<div style="color:red;" "font-weight:larger">Your current balance is ${accountDetails.balance}</div>`;
        }
            
    }else{
        alert("incorrect account number")
    }
}
