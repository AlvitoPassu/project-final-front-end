import Logo from './Logo'
import Generations from './generations'

const Header = ({ title }) => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md flex justify-between items-center">
        <Logo />
        <Generations />
    </header>
  );
};

export default Header;
