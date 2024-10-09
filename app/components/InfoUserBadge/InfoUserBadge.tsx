interface InfoUserBadgeProps {
  label: string;
  value: string | number;
}

export function InfoUserBadge({ label, value }: InfoUserBadgeProps) {
  return (
    <article className="bg-darkBlue p-2 flex rounded-xl">
      <span className="border-mediumGray border-r h-[40px] flex items-center justify-center px-6 text-lightGray font-semibold">
        {label}
      </span>
      <span className="h-[40px] flex items-center justify-center px-6 text-white font-semibold">
        {value}
      </span>
    </article>
  );
}
