
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

const formatter = new Intl.NumberFormat('pt-MZ', {
    style: 'currency',
    currency: 'MZN',
    signDisplay: "always",

});


const list = document.getElementById("transitionList");
const status = document.getElementById("status");
const form = document.getElementById("transitionForm");

form.addEventListener('submit', addTransaction)

/*   */

function renderList() {
    list.innerHTML = ``;

    if(transitions.length === 0){
        status.textContent = 'No transition.';
        return;
    }

    transitions.forEach(({ id, name, amount, date, type}) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <div class="name ${type}">
                <h4>${name}</h4>
                <p>${new Date(date).toLocaleDateString()}</p>
            </div>

            <div class="amount">
                <span>${formatter.format(amount)}</span>
            </div>

            <div class="action">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onclick="deleteTransition(${id})">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        `;

        list.appendChild(li);
    })
}

renderList()

function deleteTransition (id){
   const index = transitions.findIndex((trx) => trx.id === id);
   transitions.splice(index, 1);

   renderList();
}

function addTransaction(e) {
    e.preventDefault();

    const formData = new FormData(this);
    transitions.push({
        id: transitions.length + 1,
        name: formData.get("name"),
        amount: parseFloat(formData.get('amount')),
        date: new Date(formData.get("date")),
    });

    this.reset();

    renderList();
}