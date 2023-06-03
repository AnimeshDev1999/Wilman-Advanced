import atm from "../images/atm.svg";

const Fran = (props) => {
  const franData = [
    {
      name: "Apply for Our Kendras",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium pariatur obcaecati odio eveniet iusto a sapiente voluptas? Tempora enim deleniti, quis nemo expedita, aliquam fugiat quia ipsa, quas dignissimos illum!",
      btn: "Apply Now",
      onclk: props.func,
    },
    {
      name: "Become a Wilman Kendra Master Franchisee",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium pariatur obcaecati odio eveniet iusto a sapiente voluptas? Tempora enim deleniti, quis nemo expedita, aliquam fugiat quia ipsa, quas dignissimos illum!",
      btn: "Learn More",
    },
    {
      name: "New Franchisee Set-Up",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium pariatur obcaecati odio eveniet iusto a sapiente voluptas? Tempora enim deleniti, quis nemo expedita, aliquam fugiat quia ipsa, quas dignissimos illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, vitae. Explicabo dolor voluptas magni deleniti suscipit dolorum corrupti sequi perspiciatis minima earum fuga placeat veritatis, enim deserunt eos possimus vitae.",
      btn: "Download PDF ",
    },
  ];
  return (
    <div className=" pt-28 pb-10 px-10 rounded-lg flex flex-col gap-10">
      {franData.map((item) => (
        <div className="bg-gradient-to-l from-WGold1 border-2 border-slate-200 py-5 px-10 rounded-md flex justify-between items-center">
          <div className="xs:w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            <h2 className="text-3xl mb-4">{item.name}</h2>
            <p className="mb-4">{item.text}</p>
            <button
              onClick={item.onclk}
              className="bg-WPurple1 text-slate-800 rounded-md w-max px-3 py-1"
            >
              {item.btn}
            </button>
          </div>
          <img
            className="xs:hidden sm:block md:block lg:block xl:block 2xl:block h-60"
            src={atm}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Fran;
