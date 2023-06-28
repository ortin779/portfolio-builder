export const Contact = () => {
  return (
    <div className="p-4 flex flex-col md:items-center my-4">
      <h3 className="text-xl underline md:text:2xl lg:text-3xl self-center">
        Leave a Message
      </h3>
      <form className="p-4 flex flex-col gap-2 md:w-1/3 md:self-center">
        <p className="uppercase">Full Name</p>
        <input
          type="text"
          className="rounded-md h-8 p-2 focus-visible:outline-indigo-400"
        />
        <p className="uppercase">Email</p>
        <input
          type="text"
          className="rounded-md h-8 p-2 focus-visible:outline-indigo-400"
        />
        <p className="uppercase">Message</p>
        <textarea className="rounded-md h-24 p-2 focus-visible:outline-indigo-400" />
        <button
          type="submit"
          className="bg-indigo-500 text-white text-xl text-center rounded-md mt-4 p-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};
