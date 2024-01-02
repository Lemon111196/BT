import styled from "styled-components"

export const TodoContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    .addItem{
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        min-width: 500px;
    }
    .input-text{
        width: 400px;
    }
    .singleTodo{
        display: flex;
        justify-content: space-between;
        width: 500px;
        margin: 10px
    }
    .edit{
        color: orange;
        cursor: pointer;
    }
    .delete{
        color: red;
        cursor: pointer;
    }

`