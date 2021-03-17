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
    user.reverse().map((item,idx)=>{
        var tag=document.createElement('tr');
        var td=document.createElement('td');
        td.setAttribute("class","typeColor")

        
        var td0=document.createElement('td');
        td0.textContent=idx+1

        var td1=document.createElement('td');
        td1.textContent=item.title
        
        var td2=document.createElement('td');
        td2.textContent=item.type
        
        var td3=document.createElement('td');
        item.type=="credit"? td3.textContent="+" + item.amount: td3.textContent="-" + item.amount
        
        
        var td4=document.createElement('td');
        td4.textContent= item.timestamp
        
        item.type=="credit"?td3.style.color="green":td3.style.color="red"
        tag.append(td,td0,td1,td2,td3,td4);

        tbody.append(tag)
    })

}