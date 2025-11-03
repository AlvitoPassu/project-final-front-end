const Evolution = ({ text }) => {
  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2 className="text-lg font-semibold text-blue-700 mb-2">{text}</h2>
      <p className="text-sm text-gray-700">
        Bagian ini menampilkan tahapan evolusi dari karakter atau item, 
        mulai dari bentuk awal hingga bentuk terakhirnya.
      </p>
    </div>
  );
};

export default Evolution;
