export function UserRepositoriesWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-3/4 m-auto grid grid-cols-1 xl:grid-cols-2 justify-center gap-6 my-8">
      {children}
    </div>
  );
}
