import NavigationBar from "../components/shared/NavigationBar";

const DesktopLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen grid-cols-[260px_1fr] container mx-auto">
      <header className="lg:col-span-2">
        <NavigationBar />
      </header>
      <main className="bg-body lg:col-span-1 order-3">Main</main>
      <aside className="bg-blue-600 lg:col-span-1 lg:order-2">Sidebar</aside>
      <footer className="bg-amber-600 col-span-2 lg:order-4">footer</footer>
    </div>
  );
};

export default DesktopLayout;
