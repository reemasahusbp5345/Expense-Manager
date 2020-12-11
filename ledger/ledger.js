window.addEventListener('load', function () {
    var user = JSON.parse(localStorage.getItem('dash'))
    creatCard(user);
    
    var credit = document.getElementById('credit');
    credit.addEventListener('click', handleCredit);

    var debit = document.getElementById('debit');
    debit.addEventListener('click', handleDebit);

})

function handleCredit() {
    var tran = document.getElementById('tran')
    tran.innerHTML = "";

    var credit = JSON.parse(localStorage.getItem('dash'))

    var result = document.getElementById('result')

    var creditDiv = document.createElement('div')
    creditDiv.setAttribute('id','cred')

    var table = document.createElement('table')
    table.setAttribute('id','details')

    for (let i = 0; i < credit['transactions'].length; i++) {
        if (credit['transactions'][i]['type'] == 'credit') 
        {
            var tbody = document.createElement('tbody');

            var tag = document.createElement('tr');

            var td = document.createElement('td');


            var td1 = document.createElement('td');
            td1.textContent = credit['transactions'][i]['title']

            var td2 = document.createElement('td');
            td2.textContent = credit['transactions'][i]['type']

            var td3 = document.createElement('td');
            td3.textContent = credit['transactions'][i]['amount']

            tag.append(td, td1, td2, td3);

            tbody.append(tag)

        }
        table.append(tbody)
        creditDiv.append(table)
        result.append(creditDiv)

    };

}
function handleDebit(){
    var tran = document.getElementById('tran')
    tran.innerHTML = "";

    var credit = JSON.parse(localStorage.getItem('dash')) || ""

    var result = document.getElementById('result')

    var creditDiv = document.createElement('div')
    creditDiv.setAttribute('id','cred')

    var table = document.createElement('table')
    table.setAttribute('id','details')

    for (let i = 0; i < credit['transactions'].length; i++) {
        if (credit['transactions'][i]['type'] == 'debit') 
        {
            var tbody = document.createElement('tbody');

            var tag = document.createElement('tr');

            var td = document.createElement('td');


            var td1 = document.createElement('td');
            td1.textContent = credit['transactions'][i]['title']

            var td2 = document.createElement('td');
            td2.textContent = credit['transactions'][i]['type']

            var td3 = document.createElement('td');
            td3.textContent = credit['transactions'][i]['amount']

            tag.append(td, td1, td2, td3);

            tbody.append(tag)

        }
        table.append(tbody)
        creditDiv.append(table)
        result.append(creditDiv)

    };

}

function creatCard(user) {
    var namePara = document.getElementById('name');
    namePara.textContent = "Name: " + user['name']
    var emailPara = document.getElementById('email');
    emailPara.textContent = "Email: " + user['email']

    //show transaction on ledger page

    var tran = document.getElementById('tran');
    for (let i = 0; i < user['transactions'].length; i++) {

        var tbody = document.getElementById('tbody');

        var tag = document.createElement('tr');

        var td = document.createElement('td');


        var td1 = document.createElement('td');
        td1.textContent = user['transactions'][i]['title']

        var td2 = document.createElement('td');
        td2.textContent = user['transactions'][i]['type']

        var td3 = document.createElement('td');
        td3.textContent = user['transactions'][i]['amount']

        tag.append(td, td1, td2, td3);

        tbody.append(tag)
    };

}