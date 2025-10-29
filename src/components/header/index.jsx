
const Header = ({ title }) => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <nav className="space-x-4">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#generations" className="hover:underline">
          Generations
        </a>
        <a href="#info" className="hover:underline">
          Info
        </a>
      </nav>
    </header>
  );
};

export default Header;
