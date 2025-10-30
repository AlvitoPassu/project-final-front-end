const Logo = ({ text }) => {
  return (
    <div className="p-4 bg-yellow-100 rounded-lg flex flex-col items-center">
      <h2 className="text-lg font-semibold text-yellow-700 mb-2">{text}</h2>
      <img
        src="/assets/logo.png"
        alt="Logo"
        className="w-20 h-20 object-contain"
      />
      <p className="text-sm text-gray-700 mt-2">
        This section can display a brand or card logo.
      </p>
    </div>
  );
};

export default Logo;
