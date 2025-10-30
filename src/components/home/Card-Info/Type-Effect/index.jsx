const TypeEffect = ({ text }) => {
  return (
    <div className="p-4 bg-green-100 rounded-lg">
      <h2 className="text-lg font-semibold text-green-700 mb-2">{text}</h2>
      <p className="text-sm text-gray-700">
        Bagian ini menunjukkan jenis atau efek tertentu yang dimiliki, 
        seperti kekuatan, kelemahan, atau karakteristik spesial.
      </p>
    </div>
  );
};

export default TypeEffect;
