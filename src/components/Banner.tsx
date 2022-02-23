export default function Banner({
  message,
  button,
}: {
  message: string;
  button: string;
}) {
  return (
    <div className="ms:px-8 relative flex flex-wrap bg-indigo-500 px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8">
      <div className="mb-2 inline-block w-11/12 text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
        {message}
      </div>

      {button && (
        <a
          href="#"
          className="inline-block w-full whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white outline-none ring-indigo-300 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm"
        >
          {button}
        </a>
      )}
    </div>
  );
}
