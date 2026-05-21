
//on start
loadMonuments();

//assign submit handler
const form = document.querySelector("#monument-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
    event.preventDefault();

    //get our form values
    const name = document.querySelector("#name").value;
    const yearCompleted = document.querySelector("#yearCompleted").value;
    const type = document.querySelector("#type").value;
    const heightFeet = document.querySelector("#heightFeet").value;
    const theme = document.querySelector("#theme").value;

    const formValues = {
        name,
        yearCompleted,
        type,
        heightFeet,
        theme
    }
    console.log(formValues);

    const url = "http://localhost:8000/api/monuments";
    const config = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
    }
    const response = await fetch(url, config);
    console.log(response);
    console.log("Form submitted!");
}

//connect to API + gather data
async function loadMonuments() {
    const url = "http://localhost:8000/api/monuments";
    const config = {
        method: "get"
    }
    const response = await fetch(url, config);
    if (response.ok) {
        //converts response body to JSON text
        const monuments = await response.json();

        showMonuments(monuments);
    } else {
        showError();
    }
}

function showError() {
    
}

//update the page with monuments
function showMonuments(mons) {
    const grid = document.querySelector("#monuments-grid");

    for (let monument of mons) {
        addMonumentCard(monument, grid);
        // const { name, yearCompleted, type } = monument;

        // const monumentCard = `
        //     <div class="monument">
        //         <h2>${name}</h2>
        //         <hr>
        //         <p class="year">Year: ${yearCompleted}</p>
        //         <p>Type: ${type}</p>
        //     </div>
        // `


    }
}

function addMonumentToPage(monument, grid) {
const {name, yearCompleted, type} = monument;
 const [div, h2, hr, pYear, pType, ullinks, liEdit, liDelete] = createElements(["div", "h2", "hr", "p", "p", "ul", "li", "li", "a", "a"]);

 div.className = "monument";
 h2.textContent = name;
 pYear.className = "year";
 pYear.textContent = `Year: ${yearCompleted}`;
 pType.textContent = `Type: ${type}`;

ullinks.className = "links";
addEdit.textContent = "Edit";
aEdit.href="#";
aDelete.textContent = "Delete";
aDelete.href="#";
 

appendAll(div, h2, hr, pYear, pType);

liEdit.appendChild(aEdit);
liDelete.appendChild(aDelete);
appendAll(ulLinks, liEdit, liDelete);
div.appendChild(ulLinks);

grid.appendChild(div);


function createElements(tags) {
    const elems = [];
    for(const tag of tags) {
        elems.push(document.createElement(tag));
    }
    return elems;
}
}