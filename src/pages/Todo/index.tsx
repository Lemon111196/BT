
import { useId, useState, ChangeEvent } from 'react'
import { TodoContainer } from './styled'
import { TextField, Button } from '@mui/material'
import { ITodo } from './interface';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '../../components/Dialog';
// import { InsertEmoticon } from '@mui/icons-material';

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
            id: Math.floor(Math.random() * 10000000),
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
        console.log(createTodo);
    }
    //! Delete todo
    const [deleteTodo, setDeleteTodo] = useState<boolean>(false);
    const deleteModal = () => {
        const deleteItem = todo.filter(item => {
            return item.id !== formData.id;
        })
        setTodo(deleteItem)
        setDeleteTodo(false)
    }
    const showDeleteModal = (id: string | number) => {
        const deleteData = todo.find(item => {
            return item.id === id
        })
        if (deleteData) {
            setFormData(deleteData)
        }
        setDeleteTodo(true)
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
                    value={formData.todo}
                    onChange={onChangeTodo}
                ></TextField>
                <Button
                    variant="outlined"
                    onClick={createTodo}
                >Add</Button>
            </div>

            <div className="listItem">
                {todo.map((item, index) => (
                    <div className="singleTodo" key={index}>
                        <div className="content">
                            <span className='todo-list'>{index + 1}.</span>
                            <span>{item.todo}</span>
                        </div>
                        <div className="group-btn">
                            <ModeEditOutlineIcon className='edit'></ModeEditOutlineIcon>
                            <DeleteIcon onClick={() => showDeleteModal(item.id)} className='delete'></DeleteIcon>
                        </div>
                    </div>
                ))}
            </div>
            <Dialog open={deleteTodo}
            onSubmit={deleteModal}
            title='Delete Todo'
            submitBtn='Delete'>
                <p>Are you sure to delete this?</p>
            </Dialog>
        </TodoContainer>
    )
}
