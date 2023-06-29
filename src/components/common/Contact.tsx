export const Contact = () => {
  return (
    <div className="p-4 flex flex-col md:items-center my-4 bg-indigo-300 rounded-xl md:w-1/3 mx-auto space-y-4">
      <h3 className="text-xl underline md:text:2xl lg:text-3xl self-center">
        Leave a Message
      </h3>
      <form className="p-4 flex flex-col gap-2 w-full">
        <p className="uppercase">
          Full Name <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          className="rounded-md h-8 p-2 focus-visible:outline-indigo-400"
        />
        <p className="uppercase">
          Email <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          className="rounded-md h-8 p-2 focus-visible:outline-indigo-400"
        />
        <p className="uppercase">
          Message <span className="text-red-600">*</span>
        </p>
        <textarea className="rounded-md h-24 p-2 focus-visible:outline-indigo-400" />
        <button
          type="submit"
          className="bg-indigo-500 text-white text-xl text-center rounded-md mt-4 p-2 hover:bg-indigo-400"
        >
          Send
        </button>
      </form>
    </div>
  );
};
