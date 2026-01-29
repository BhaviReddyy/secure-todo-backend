import { supabase } from "../config/supabase.js";

export const createTodo = async(req, res) => {
    const { title } = req.body;
    const userId = req.user.userId;

    const { data } = await supabase
        .from("todos")
        .insert([{ title, userId }])
        .select();

    res.status(201).json(data);
};

export const getTodos = async(req, res) => {
    const userId = req.user.userId;

    const { data } = await supabase
        .from("todos")
        .select("*")
        .eq("userId", userId);

    res.json(data);
};

export const updateTodo = async(req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;

    const { data } = await supabase
        .from("todos")
        .update(req.body)
        .eq("id", id)
        .eq("userId", userId)
        .select();

    if (!data.length)
        return res.status(403).json({ message: "Unauthorized" });

    res.json(data);
};

export const deleteTodo = async(req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;

    const { data } = await supabase
        .from("todos")
        .delete()
        .eq("id", id)
        .eq("userId", userId);

    if (!data.length)
        return res.status(403).json({ message: "Unauthorized" });

    res.json({ message: "Todo deleted" });
};