import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../actions/index';
import List from './list';
import './todo.css';


const Todo = (props) => {
    console.log(props)
    const [inputData, setInputData] = useState('');

    const handleKeyPress = (target) => {
        if (target.charCode == 13) {
            props.dispatch(addTodo(inputData));
            setInputData('');
        }
    }

    // const list = useSelector((state) => state.todoReducers.list);
    // console.log("useSelector",list);
    // const dispatch = useDispatch();


    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption className="title">
                        Add your list here
                    </figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="Add items..." value={inputData} onChange={(event) => setInputData(event.target.value)} onKeyPress={handleKeyPress} />
                    <i className="fas fa-plus add-btn" onClick={() => props.dispatch(addTodo(inputData),
                        setInputData(''))}></i>
                </div>
                <List />

                <div className="showitem">
                    <button className="btn effect04" data-sm-link-text="remove All" onClick={() => props.dispatch(removeTodo())}><span>Check list</span></button>
                </div>
            </div>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch

    }
}



export default connect(mapDispatchToProps)(Todo);
