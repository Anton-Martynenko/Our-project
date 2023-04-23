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
                {tasks.map(t => {
                    return (
                        <li key={t.id} title={t.title} className={t.isDone ? "is-done" : ''}>
                            <input type="checkbox"/>
                            <span>{t.title}</span>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    );
};