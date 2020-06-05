const addEntryButton = document.getElementById('add-entry');


const clearInput = () => {
    document.getElementById('name').value = null;
    document.getElementById('message').value = null;
}

const renderNewEntry = (name, message) => {
    const newEntry = document.createElement('li');
    const today = new Date();
    const date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ', ' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    newEntry.innerHTML = `
    <div>${date}</div>
    <div>${name}</div>
    <div>${message}</div>
    `;
    const entriesRoot = document.getElementById('entries');
    entriesRoot.append(newEntry);
}

const addEntryHandler = () => {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    renderNewEntry(name, message);
    clearInput();
}

addEntryButton.addEventListener('click', addEntryHandler);