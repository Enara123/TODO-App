import { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

export default function TodoForm({ open, handleClose, onSubmit, todo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setDescription(todo.description);
        } else {
            setTitle("");
            setDescription("");
        }
    }, [todo, open]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSubmit({ title, description }, todo?._id);
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" mb={2}>
                    {todo ? "Edit Task" : "Add Task"}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        fullWidth
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        multiline
                        required
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Box display="flex" justifyContent="flex-end">
                        <Button onClick={handleClose} sx={{ mr: 1 }}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained">
                            {todo ? "Save" : "Add"}
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
}
