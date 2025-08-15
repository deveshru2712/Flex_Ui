export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full overflow-y-auto">
      {children}
    </div>
  );
}
