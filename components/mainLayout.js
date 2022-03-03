import {GET, WRITE, DELETE, UPDATE} from '../const.js';

let taskList = [];

const getData = async() => {
    const data = await fetch(GET);
    taskList = await data.json();
}

const renderData = () => {
    const container = document.querySelector('#container');
    console.log(taskList)
    container.innerHTML = `
    ${
        taskList.map(el => `<div 
        class="${el.idDone ?? 'isDone'} 
        id="${el.id}"
        >
        ${el.id}
        ${el.name}
        </div>`)
    }
    ` + container.innerHTML
    taskList.forEach(el => {
        el
    })
}
const addedTask = async() => {
    if (event.target.dataset.type === 'b') {
        console.log('click')
    const name = prompt('Enter your name');
    const result = await fetch (WRITE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name
        })
    })
    await result.json()
    }
}
const deleteTask = async() => {
    if (event.target.dataset.type === 'd') {
        console.log('click')
    const id = prompt('Enter delete id');
    const result = await fetch (DELETE, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })
    })
    await result.json()
    }
}

export const MainLayout = () => {
    getData().then(() => renderData())

    const container = document.createElement('div');
    container.id = 'container';
    document.addEventListener('click', addedTask);
    document.addEventListener('click', deleteTask);
    container.innerHTML = `
    <button data-type="b" >Put query</button>
    <button data-type="d">Delete query</button>
    ` 
    
    return container;
}