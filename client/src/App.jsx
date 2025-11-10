import { useEffect, useState } from "react";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {
    getTodos,
    createTodo,
    toggleDone,
    updateTodo,
    deleteTodo,
} from "./api/todoApi";

function App() {
    const [todos, setTodos] = useState([]);
    const [formOpen, setFormOpen] = useState(false);
    const [editingTodo, setEditingTodo] = useState(null);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const res = await getTodos();
        setTodos(res.data);
    };

    const handleOpenAdd = () => {
        setEditingTodo(null);
        setFormOpen(true);
    };

    const handleOpenEdit = (todo) => {
        setEditingTodo(todo);
        setFormOpen(true);
    };

    const handleClose = () => {
        setEditingTodo(null);
        setFormOpen(false);
    };

    const handleSubmit = async (data, id) => {
        if (id) {
            const res = await updateTodo(id, data);
            setTodos(todos.map((t) => (t._id === id ? res.data : t)));
        } else {
            const res = await createTodo(data);
            setTodos([...todos, res.data]);
        }
        handleClose();
    };

    const handleToggle = async (id) => {
        const res = await toggleDone(id);
        setTodos(todos.map((t) => (t._id === id ? res.data : t)));
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter((t) => t._id !== id));
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
                TODO App
            </Typography>
            <Paper sx={{ p: 3 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                    }}
                >
                    <Typography variant="h6">TODO List</Typography>
                    <Button variant="contained" onClick={handleOpenAdd} color="success">
                        + Add Task
                    </Button>
                </Box>

                <TodoForm
                    open={formOpen}
                    handleClose={handleClose}
                    onSubmit={handleSubmit}
                    todo={editingTodo}
                />

                <TodoList
                    todos={todos}
                    onToggle={handleToggle}
                    onUpdate={handleOpenEdit}
                    onDelete={handleDelete}
                />
            </Paper>
        </Container>
    );
}

export default App;
