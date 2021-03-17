window.addEventListener('load',function(){
    var d = JSON.parse(localStorage.getItem('loginUser'))
    var logged = document.getElementById('name');
    logged.textContent =  d['name']
    var form=document.getElementById('form');
    form.addEventListener('submit',addTransactions)

    document.getElementById("logout").addEventListener("click",logOut)

    var user = JSON.parse(localStorage.getItem('loginUser'))
    totalTransaction(user.transactions)
    showTransactions(user.transactions)
    // document.getElementById('btn').addEventListener('click',logOut)
    
})

const totalTransaction=(data)=>{
    console.log("box1")
    var income=document.getElementById('income');

    income.textContent="Rs:" +  data.filter((item)=>item.type=="credit").reduce((ac,el)=>{return ac+el.amount},0)
    var  expense=document.getElementById('expense');
    expense.textContent="Rs:" +  data.filter((item)=>item.type=="debit").reduce((ac,el)=>{return ac+el.amount},0)
    var  balance=document.getElementById('balance');
    balance.textContent="Rs:" +  data.reduce((ac,el)=>{return ac+el.amount},0)
}

function logOut(){
    location.href="index.html"
}

function loadData(key) {
    return JSON.parse(localStorage.getItem(key))
}
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}


function addTransactions(){
    event.preventDefault();
    var form=new FormData(event.target);

    var title=form.get('title');
    var type=form.get('type') ;
    var amount= Number(form.get('amount'))

   var data= JSON.parse(localStorage.getItem('loginUser'))
    var transaction={title: title, type:type, amount:amount, timestamp:new Date().toUTCString()}
    console.log(transaction,data)
    data.transactions.push(transaction)
    localStorage.setItem('loginUser',JSON.stringify(data))
    showTransactions(data.transactions)
    totalTransaction(data.transactions)
    document.getElementById('title').value=""
    document.getElementById('amount').value=""
    document.getElementById('type').value=""
}

function showTransactions(details){
    console.log(details)
 
    var tbody=document.getElementById('tbody');
    tbody.innerHTML=""
    
    details.reverse().filter((item,idx)=>{return idx<5}).map((item)=>{
        var tag=document.createElement('tr');
        var td=document.createElement('td');
        
    
        var td1=document.createElement('td');
        td1.textContent=item.title
        
        var td2=document.createElement('td');
        td2.textContent=item.type
        
        var td3=document.createElement('td');
        td3.textContent=item.amount
    
        var td4=document.createElement('td');
        td4.textContent= item.timestamp
         
        tag.append(td,td1,td2,td3,td4);

        tbody.append(tag)
    })
     
}

 