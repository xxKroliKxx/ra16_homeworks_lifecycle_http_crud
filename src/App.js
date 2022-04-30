import logo from './logo.svg';
import {useState, useEffect} from "react";
import './App.css';
import Header from "./Header";
import Tasks from "./Tasks";
import Footer from "./Footer";

const notesAPI = 'http://localhost:7777/notes'

function App() {
    let [tasks, setTasks] = useState([])

    useEffect(() => {
        updateTasks()
    }, [])

    async function onButtonCreateClick(content) {
        let fetchParam = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: 0, content: content})
        }
        let response = await fetch(notesAPI, fetchParam);
        if (response.status === 204) {
            updateTasks()
        }
    }

    async function onButtonDeleteClick(id) {
        let fetchParam = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        await fetch(notesAPI + '/' + id, fetchParam);
        updateTasks()
    }

    function onButtonUpdateClick() {
        updateTasks()
    }

    async function updateTasks() {
        let response = await fetch(notesAPI);
        const data = await response.json()
        setTasks(data)
    }

    return (
        <>
            <Header callBackFunc={onButtonUpdateClick}/>
            {tasks? <Tasks tasks={tasks} callBackFunc={onButtonDeleteClick}/>:<></>}
            <Footer callBackFunc={onButtonCreateClick}/>
        </>
    )
}

export default App;
