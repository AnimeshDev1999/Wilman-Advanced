const Stats = () => {
  const data = [
    { name: "Outlets", no: "24,887" },
    { name: "States & UTs Covered", no: "32" },
    { name: "District Covered", no: "595" },
    { name: "Postal Code Covered", no: "5,834" },
    { name: "Presence in Tier IV & VI Cities ", no: "~82%" },
  ];
  return (
    <div className="p-5 bg-WGold1 rounded-md grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
      {data.map((item) => (
        <div className="flex flex-col flex-wrap gap-2 justify-center items-center">
          <p className="text-3xl font-semibold">{item.no}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Stats;
