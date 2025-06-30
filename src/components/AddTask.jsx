import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd({ id: Date.now(), text, completed: false });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center">
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Add a new task..." 
          className="flex-grow p-3 rounded-l-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg font-semibold">Add Task</button>
      </div>
    </form>
  );
};

export default AddTask;
