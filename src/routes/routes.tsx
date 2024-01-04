import Todo from "../pages/Todo";
import Dashboard from "../pages/Dashboard";
import Form from "../pages/test/test1";

const routes = () => {
    return[
        {
            path: "/todo",
            element: <Todo/>
        },
        {
            path: "/dashboard",
            element: <Dashboard/>
        },
        {
            path: "/test",
            element: <Form/>
        },
    ];
};
export default routes;