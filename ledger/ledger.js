window.addEventListener('load', function () {
    var user = JSON.parse(localStorage.getItem('loginUser'))
    userDetails(user)
    creatCard(user.transactions);
    
    var all= document.getElementById('all');
    all.addEventListener('click', handleAll);

    var credit = document.getElementById('credit');
    credit.addEventListener('click', handleCredit);
    

    var debit = document.getElementById('debit');
    debit.addEventListener('click', handleDebit);

})

const handleAll=()=>{
    var user = JSON.parse(localStorage.getItem('loginUser'))
    console.log("all",user)
   creatCard(user.transactions)
}

const userDetails=(user)=>{
    var namePara = document.getElementById('name');
    namePara.textContent = "Name: " + user['name']
    var emailPara = document.getElementById('email');
    emailPara.textContent = "Email: " + user['email']
}

function handleCredit() {
    console.log("credit data")
    var user = JSON.parse(localStorage.getItem('loginUser'))
   
    const creditData=user.transactions.filter(item=>{return item.type=="credit"})
     
    creatCard(creditData)
 
}
function handleDebit(){
    console.log("debit data")
    var user = JSON.parse(localStorage.getItem('loginUser'))
   
    const debitData=user.transactions.filter(item=>{return item.type=="debit"})
     
    creatCard(debitData)

}

function creatCard(user) {
   

    //show transaction on ledger page
 
    var tbody = document.getElementById('tbody');
    tbody.innerHTML=""
    for (let i = 0; i < user.length; i++) {


        var tag = document.createElement('tr');

        var td = document.createElement('td');


        var td1 = document.createElement('td');
        td1.textContent = user[i]['title']

        var td2 = document.createElement('td');
        td2.textContent = user[i]['type']

        var td3 = document.createElement('td');
        td3.textContent = user[i]['amount']

        tag.append(td, td1, td2, td3);

        tbody.append(tag)
    };

}