const Faq = () => {
  const faqText = [
    {
      ques: "What is Wilman Advanced?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquam deserunt rerum explicabo numquam temporibus necessitatibus unde, voluptatibus consequuntur perspiciatis ipsam ea animi minima debitis maiores vero facere dolor. Consequuntur!",
    },
    {
      ques: "How to apply for kendra?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquam deserunt rerum explicabo numquam temporibus necessitatibus unde, voluptatibus consequuntur perspiciatis ipsam ea animi minima debitis maiores vero facere dolor. Consequuntur!",
    },
    {
      ques: "How to get regestered?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquam deserunt rerum explicabo numquam temporibus necessitatibus unde, voluptatibus consequuntur perspiciatis ipsam ea animi minima debitis maiores vero facere dolor. Consequuntur!",
    },
    {
      ques: "How to apply for What are the benifits?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquam deserunt rerum explicabo numquam temporibus necessitatibus unde, voluptatibus consequuntur perspiciatis ipsam ea animi minima debitis maiores vero facere dolor. Consequuntur!",
    },
  ];
  return (
    <div className="bg-WPurple1 m-5 pt-28 pb-10 px-10 rounded-lg">
      <h2 className="text-3xl mb-10">Frequently asked questions</h2>
      <div className="flex flex-col gap-5">
        {faqText.map((item) => (
          <div className="border-2 border-slate-700 rounded-md p-5">
            <h2 className="text-2xl mb-5">{item.ques}</h2>
            <p>{item.ans}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
