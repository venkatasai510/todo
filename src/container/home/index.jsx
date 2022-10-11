import React, { useEffect, useState } from 'react'
import './style.scss'

const Home = () => {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);
    const [save, setSave] = useState(false);
    const [mark, setMark] = useState(false);
    const [editable, setEditable] = useState('')

    
    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const addTask = () => {
        // const list = [...list]
        // list.push(item)
        setList(prev => [...prev, item])
        setItem('')
    }

    // Delete Item in array
    const deleteItem = (i) => {
        const newList = [...list]
        newList.splice(i, 1);
        setList(newList);
    }

    
    // update Items in the array
    const updateList = () => {
        list.splice(editable, 1, item);
        setItem(editable);
        setSave(!save)
        setItem('')
    }

    // Edit the array
    const editItem = (v, i) => {
        setSave(!save);
        setEditable(i)
        setItem(v);
    }



  return (
    <>
        <section>
            <div className="container">
                <div className="todo">
                    <h1>Todo App</h1>
                    <div className="todoForm">
                        <input type="text" placeholder='Enter Your Todo List' onChange={(e) => handleChange(e)} value={item}/>
                        {
                            save ? 
                            <button type='submit' onClick={updateList}>Update</button>
                            :
                            <button type='submit' onClick={addTask}>Add Task</button>
                        }
                    </div>
                    <div className="todoList">
                    <h2>Todo List</h2>
                        {list.map((val, i) => {
                            return(
                                <div key={i} className='list'>
                                    {/* <input type="checkbox" onClick={(index) => marked(i)}/> */}
                                    {/* <input type="text" value={val} onChange={(v) => {}}/> */}
                                    {/* {
                                        mark ? <p><s>{val}</s></p> : <p>{val}</p>
                                    } */}
                                    <p>{val}</p>
                                    <button onClick={(ind) => editItem(val, i)}>Edit</button>
                                    <button className='del' onClick={(ind) => deleteItem(i)}>Del</button>
                                </div>
                            )
                        })}
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home;








