import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import './todo.css';


const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption className="title">
                        Add your list here
                    </figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="Add items..." value={inputData} onChange={(event) => setInputData(event.target.value)} />
                    <i className="fas fa-plus add-btn" onClick={() => dispatch(addTodo(inputData),
                        setInputData(''))}></i>
                </div>

                <div className="showitems">
                    {
                        list.map((elem) => {
                            return (
                                <div className="eachitem" key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <div className="todo-btn">
                                        <i className="fas fa-trash-alt add-btn" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                    </div>
                                </div>
                            )

                        })
                    }


                </div>

                <div className="showitems">
                    <button className="btn effect04" data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}><span>Check list</span></button>
                </div>
            </div>
        </div >
    )
}

export default Todo
