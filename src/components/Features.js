import ico1 from "../images/people.svg";

const Features = () => {
  const data = [
    {
      ico: ico1,
      name: "Feature 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      ico: ico1,
      name: "Feature 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      ico: ico1,
      name: "Feature 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      ico: ico1,
      name: "Feature 4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="p-5 bg-WGold1 rounded-md grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 justify-center items-center">
      {data.map((item) => (
        <div className="flex flex-col justify-center items-center">
          <img src={item.ico} className="h-16 w-16 mb-3" alt="" />
          <h3 className="text-xl mb-1 font-semibold">{item.name}</h3>
          <p className="text-sm text-center">{item.text}</p>
        </div>
      ))}
    </div>
  );
};
export default Features;
