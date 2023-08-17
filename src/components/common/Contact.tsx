export const Contact = () => {
  return (
    <div className="p-4 flex flex-col md:items-center my-4 rounded-xl md:w-1/2 lg:w-1/3 mx-auto space-y-4">
      <h3 className="text-xl underline md:text:2xl lg:text-3xl self-center">
        Leave a Message
      </h3>
      <div className="flex flex-col gap-2 w-full">
        <message-me
          publicKey={import.meta.env.VITE_EMAILJS_PUBLIC_KEY}
          serviceId={import.meta.env.VITE_EMAILJS_SERVICE_ID}
          templateId={import.meta.env.VITE_EMAILJS_TEMPLATE_ID}
        />
      </div>
    </div>
  );
};
