import { FaTrash } from 'react-icons/fa';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className={`flex items-center justify-between p-4 rounded-lg transition-colors duration-200 ${task.completed ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-100 dark:bg-gray-800'}`}>
      <div 
        className="flex items-center cursor-pointer flex-grow"
        onClick={() => onToggle(task.id)}
      >
        <input 
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-4 h-5 w-5 rounded text-blue-500 focus:ring-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 dark:focus:ring-offset-gray-800"
        />
        <span 
          className={`flex-grow ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}
        >
          {task.text}
        </span>
      </div>
      <button onClick={() => onDelete(task.id)} className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 ml-4 p-2 rounded-full transition-colors duration-200">
        <FaTrash />
      </button>
    </li>
  );
};

export default TaskItem;
