import React from "react";

let tasks = [
    {id: 1, title: 'cleen teeth', isDone: false},
    {id: 2, title: 'breakfast', isDone: false},
    {id: 3, title: 'read a book', isDone: false}
]

export const Todolist = () => {
    return (
        <div>
            <h3>Polina's job</h3>
            <ul>
                <li>{tasks[0].title}</li><input type='checkbox'/>
                <li>{tasks[1].title}</li><input type='checkbox'/>
                <li>{tasks[2].title}</li><input type='checkbox'/>
            </ul>
        </div>
    );
};