import { List } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onUpdate, onDelete }) {
    return (
        <List>
            {todos.map((todo) => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    onToggle={onToggle}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </List>
    );
}
