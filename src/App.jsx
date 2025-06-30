import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;