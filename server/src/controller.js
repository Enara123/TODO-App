import TODO from "./model.js";

export const getAllTodo = async (req, res) => {
    try {
        const todos = await TODO.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) return res.status(400).json({ message: "Title and description is required" });

        const newTodo = new TODO({ title, description });
        const savedTodo = await newTodo.save();

        res.status(201).json(savedTodo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

export const updateTodo = async (req, res) => {

    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const updateTodo = await TODO.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );
        res.json(updateTodo);
    }
    catch (error) {
        res.status(500).json({ message: "Error: Could not update Todo!" });
    }
};

export const updateDoneStatus = async (req, res) => {
    const { id } = req.params;

    try {
        const todo = await TODO.findById(id);
        todo.done = !todo.done;
        await todo.save();
        res.json(todo);
    }
    catch (error) {
        res.status(500).json({ message: "Error: Could not mark Todo done!" });
    }
};

export const deleteTodo = async (req, res) => {
    const { id } = req.params;

    try {
        await TODO.findByIdAndDelete(id);
        res.json({ message: "Todo deleted successfully." });
    }
    catch (error) {
        res.status(500).json({ message: "Error: Could not delete Todo!" });
    }
};