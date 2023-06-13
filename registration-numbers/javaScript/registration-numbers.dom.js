// elements references
const input = document.querySelector('#reg');
const show = document.querySelector('#show');
const lst = document.querySelector('#list');
const add = document.querySelector('#add');
const message = document.querySelector('.messageForError');

// factory function instance
const app = RegistrationApp();

// function
const addElement = (registration) => {
    if (registration !== '') {
        const element = document.createElement('li');
        const node = document.createTextNode(registration);
    
        element.append(node);
    
        lst.insertBefore(element, lst.children[0]);
    }
};

// events
add.addEventListener('click', () => {

    // validating the registration number from the client
    app.setRegistrationNumber(input.value).validRegistrationNumber();

    // create an element for the current registration number
    addElement(app.getRegistrationNumber());

    app.addRegistrationTownsObject();

    // set the input area to an empty string
    input.value = '';

    message.innerHTML = app.getMessage();

});

show.addEventListener('click', () => {
    const places = document.querySelector('input[name="registrations"]:checked');
    
    if (places) {
        lst.innerHTML = '';
        // create a variable to store the reg numbers list from the factory function
        const townsArray = app.filter(places.value);

        // iterate over the length of the list
        for (let i = 0; i < townsArray.length; i++) {
            // create a list element for every reg number and log it
            addElement(townsArray[i]);
        }
    }

});