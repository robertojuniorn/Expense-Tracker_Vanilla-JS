
/* This array object save all the information about Expense */

const transitions = [
    {
        id: 1,
        name: 'salary',
        amount: 5000,
        date: new Date(),
        type: 'income'
    },
    {
        id: 2,
        name: 'haircut',
        amount: 20,
        date: new Date(),
        type: 'expense'
    },
    {
        id: 3,
        name: 'concert ticket',
        amount: 350,
        date: new Date(),
        type: 'expense'
    }
];

/*  Formatter  */

const formatter = new Intl.NumberFormat('en-US', {
    style: 'curremcy',
    currency: 'USD',
    signDisplay: "always",

});


const list = document.getElementById("transitionList");
const status = document.getElementById("status");

/*   */

function renderList() {
    list.innerHTML = ``;

    if(transitions.length === 0){
        status.textContent = 'No transition.';
        return;
    }

    transitions.forEach(({ name, amount, date, type}) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <div class="name">
                <h4>${name}</h4>
                <p>${new Date(date).toLocaleDateString()}</p>
            </div>

            <div class="amount">
                <span>${formatter}</span>
            </div>
        `;

        list.appendChild(li);
    })
}

renderList()