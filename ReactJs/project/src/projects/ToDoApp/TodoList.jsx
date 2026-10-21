import { FaTrash } from 'react-icons/fa'
function TodoList({ taskList, setTaskList }) {

    const handleCheck = (id) => {
        setTaskList((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
    }

    const deleteTask = (id) => {
        setTaskList((prev) =>
            prev.filter((task) => task.id !== id));
    }

    return (
        <div className="my-2">
            {taskList.map((task) => (
                <div className="flex justify-between items-center my-3 w-md h-10 p-1.5 rounded-md overflow-y-auto scrollbar-none bg-white text-black" key={task.id}>
                    <span className={`max-w-sm leading-5 ${task.isCompleted ? 'line-through' : ""}`}>{task.title}</span>
                    <div className="flex gap-2">
                        <input type="checkbox" className="size-4 cursor-pointer accent-green-700" checked={task.isCompleted} onChange={() => handleCheck(task.id)} />
                        <button>
                            <FaTrash className='text-red-600 active:scale-95 cursor-pointer' onClick={() => deleteTask(task.id)} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoList