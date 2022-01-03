import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/index';
import './todo.css';

const list = (props) => {
    return (
        <>
            <div className="showitems">
                {
                    props.list.map((elem) => {
                        return (
                            <div className="eachitem" key={elem.id}>
                                <h3>{elem.data}</h3>

                                <i className="fas fa-trash-alt add-btn" onClick={() => props.dispatch(deleteTodo(elem.id))}></i>

                            </div>
                        )

                    })
                }


            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state.todoReducers.list)
    return {
        list: state.todoReducers.list
    }
}

export default connect(mapStateToProps)(list);
