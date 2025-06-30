import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/">DevTask Manager</Link>
        </h1>
        <nav>
          <Link to="/" className="mr-6 hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-400">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
