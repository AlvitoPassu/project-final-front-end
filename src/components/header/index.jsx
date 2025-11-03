import Logo from './Logo'
import Generations from './generations'

const Header = ({ title }) => {
  return (
    <header className="bg-gray-600 text-white py-4 px-6 shadow-md">
      {/* Navbar utama */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Logo />
      </div>

      {/* Generations di bawah navbar */}
      <div className="mt-10 text-center ">
        <Generations text="Ini Generations" />
      </div>
    </header>
  );
};

export default Header;
