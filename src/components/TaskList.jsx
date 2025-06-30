import TaskItem from './TaskItem';

const TaskList = ({ tasks, title, onToggle, onDelete }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
      {tasks.length > 0 ? (
        <ul className="space-y-3">
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No tasks to display.</p>
      )}
    </div>
  );
};

export default TaskList;
