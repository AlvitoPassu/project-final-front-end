const TypeEffect = ({ text }) => {
  return (
    <div className="p-4 bg-green-100 rounded-lg">
      <h2 className="text-lg font-semibold text-green-700 mb-2">{text}</h2>
      <p className="text-sm text-gray-700">
        Type effect details will be displayed here. 
        You can show strengths, weaknesses, or special abilities.
      </p>
    </div>
  );
};

export default TypeEffect;
