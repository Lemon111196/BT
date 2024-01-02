
import { useId, useState, ChangeEvent } from 'react'
import { TodoContainer } from './styled'
import { TextField, Button } from '@mui/material'
import { ITodo } from './interface';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo() {
    const id = useId();
    const [formData, setFormData] = useState<ITodo>({
        id,
        todo: "",
    })
    const [todo, setTodo] = useState<ITodo[]>([]);  
    const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setFormData({
            ...formData,
            id: Math.floor(Math.random() *100000),
            [e.target?.name]: e.target?.value,
        })
    }
      /**
   * !Create a new todo
   * @params
   * @return void */
    const createTodo = () => {
        setFormData({
            id,
            todo: "",
        })
        setTodo([...todo, formData]);
    }
    return (
        <TodoContainer>
            <h2>Todo List</h2>
            <div className="addItem">
                <TextField
                    id="outlined-basic"
                    size="small"
                    label="Todo"
                    variant="outlined"
                    name="todo"
                    className='input-text'
                    onChange={onChangeTodo}
                ></TextField>
                <Button
                variant="outlined"
                onChange={createTodo}
                >Add</Button>
            <div className="listItem">
                {todo.map((item, index) => (
                    <div className="singleTodo" key={index}>
                        <div className="content">
                            <span className='todo-list'>{index + 1}.</span>
                            <span>{item.todo}</span>
                        </div>
                        <div className="group-btn">
                        <ModeEditOutlineIcon></ModeEditOutlineIcon>
                        <DeleteIcon></DeleteIcon>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </TodoContainer>
    )
}
