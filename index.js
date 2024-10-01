// === STATE ===

let parties = [];

//* Updates state with parties from the API */
const getParties = async (party) => {
    try {
        const response = await fetch(API_URL);
        const parsed = await response.json();

        if (!response.ok){
            throw new Error(parsed.error.messege);
        }
        
        parties = parsed.data;
    } catch (e) {
        console.error(e);
    }
};

/** Sends a POST request to the API */
const addParty = async (party) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(party)
        });
    }
};

/** Sends DELETE */
const deleteParty = async (id) => {
    try {
        const response = await fetch(API_URL + id, {
            method:"DELETE",
        });
    }
}


// === RENDER === 

/**renders the parties in state as a list */
const renderParties = () => {
    const $partyList = document.querySelector("ul.parties");

    if (!parties.length) {
        $partyList.innerHTML = `
        <li>No partieis at this time :(</li>
        `;
        return;
    }


const $parties = parties.map((party) => {
    const $li = document.createElement("li");
    $li.innerHTML =`
    <h2>${party.name},</h2>
    <time datetime="${party.date}">${party.date.slice(0, 10)}</time>
    <address>${party.location}</address>
    <p>${party.description}</p>
    <button>Delete Party</button>
    `;

    const $button = $li.querySelector("button");
    $button,addEventListener("click", async () => {

    });

    return $li;
});
  $partyList.replaceChildren(...$parties);
};


    <h2>${party.name},</h2>
    <time datetime="${party.date"
    ';

}
)

//Script/
const init = async () => {

}

init ();

// Add a new party when form is submitted
const $form = document.querySelector("form");
$form.addEventListener("submit",async (event) => {
    event.preventDefault();

    const date = new Date($form.date.value).toISOString();
    const party = {
        name: $form.name.value,
        date,
        location: $form.location.value,
    };
    await addParty(party);
});