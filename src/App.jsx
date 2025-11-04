import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";

const App = () => {
  return (
    <div className="max-h-screen bg-gray-100 flex justify-center items-center p-4 sm:p-8">
      <div className="w-full max-w-screen bg-white shadow-2xl rounded-xl p-8 space-y-8">
        <Header text="This is a Header component" />
        <Home text="This is a Home component" />
        <Footer text="This is a Footer component" />
      </div>
    </div>
  );
};

export default App;
