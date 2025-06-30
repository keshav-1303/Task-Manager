import { useContext } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import { TaskContext } from '../context/TaskContext';

const HomePage = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useContext(TaskContext);

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="p-4">
      <AddTask onAdd={addTask} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TaskList tasks={pendingTasks} title="Pending Tasks" onToggle={toggleTask} onDelete={deleteTask} />
        <TaskList tasks={completedTasks} title="Completed Tasks" onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default HomePage;
