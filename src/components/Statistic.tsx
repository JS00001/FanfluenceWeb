export default function Statistic({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center md:p-4">
      <div className="text-xl font-bold text-blue-500 sm:text-2xl md:text-3xl">
        {value}
      </div>
      <div className="text-sm font-semibold text-gray-600 sm:text-base">
        {title}
      </div>
    </div>
  );
}
