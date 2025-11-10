import { Box, Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
    return (
        <ListItem
            secondaryAction={
                <Box >
                    <IconButton edge="end" onClick={() => onUpdate(todo)} sx={{ mr: 0.5 }}>
                        <Edit color="primary" />
                    </IconButton>
                    <IconButton edge="end" onClick={() => onDelete(todo._id)}>
                        <Delete color="error" />
                    </IconButton>
                </Box>
            }
        >
            <Checkbox checked={todo.done} onChange={() => onToggle(todo._id)} />
            <ListItemText
                primary={todo.title}
                secondary={todo.description}
                sx={{
                    textDecoration: todo.done ? "line-through" : "none",
                    opacity: todo.done ? 0.6 : 1,
                }}
            />
        </ListItem>
    );
}
