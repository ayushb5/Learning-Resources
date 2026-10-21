import { useEffect, useState } from "react"
import TodoList from "./TodoList";

function Todo() {
    const [task, setTask] = useState({
        id: null,
        title: "",
        isCompleted: false
    })

    const [taskList, setTaskList] = useState(() => {
        const savedTask = localStorage.getItem("tasks");
        return savedTask ? JSON.parse(savedTask) : [];
    });

    const [dateTime, setDateTime] = useState("");

    const handleChange = (e) => {
        const data = {
            id: Date.now(),
            title: e.target.value,
            isCompleted: false
        }
        setTask(data);
    }

    const addTask = (e) => {
        e.preventDefault();
        if (taskList.some((item) => item.title === task.title)) {
            alert("Duplicate task not allowed");
            setTask({
                id: null,
                title: "",
                isCompleted: false
            })
            return;
        }
        setTaskList((prev) => [
            ...prev,
            task
        ])

        setTask({
            id: null,
            title: "",
            isCompleted: false
        })
    }

    const clearAllTasks = () => {
        setTaskList([]);
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskList));
    }, [taskList]);

    useEffect(() => {
        const updatedTime = () => {
            const now = new Date();
            setDateTime(now.toLocaleString());
        };

        updatedTime();
        const intervalId = setInterval(updatedTime, 1000);
        return () => {
            clearInterval(intervalId);
        }
    })

    return (
        <div className="min-h-screen py-4 flex flex-col items-center gap-3 text-white bg-slate-900">
            <h2 className="text-3xl font-bold">Todo List</h2>
            <span className="text-xl p-2 rounded-xl bg-gray-800">{dateTime}</span>
            <form onSubmit={addTask} className="rounded-lg bg-white text-black">
                <input type="text" className="m-1 px-1 py-0.5 outline-0" value={task.title} onChange={handleChange} required />
                <button type="submit" className="h-full p-1 py-1.5 rounded-r-lg font-medium text-white bg-blue-600 hover:bg-blue-700 cursor-pointer">Add Task</button>
            </form>
            <TodoList taskList={taskList} setTaskList={setTaskList} />
            {taskList.length === 0 ? (
                <h3 className="text-2xl font-medium">No tasks yet. Add a task to get started!</h3>
            ) : (
                <button className="px-2 py-1 rounded-lg text-lg bg-red-600 active:scale-95 transition duration-200 cursor-pointer" onClick={clearAllTasks}>Clear All</button>
            )}
        </div>
    )
}

export default Todo