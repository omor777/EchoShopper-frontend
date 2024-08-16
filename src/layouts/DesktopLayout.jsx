import { Outlet } from "react-router-dom";
import NavigationBar from "../components/shared/NavigationBar";
import SidebarComponent from "../components/shared/SidebarComponent";

const DesktopLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen lg:grid-cols-[260px_1fr] container mx-auto ">
      <header className="col-span-2 mb-3">
        <NavigationBar />
      </header>
      <main className="bg-body lg:col-span-1 lg:order-3 lg:p-8 col-span-2 lg:ml-4 lg:ml- p-4 overflow-y-scroll">
        <Outlet />
      </main>
      <aside className=" lg:col-span-1 lg:order-2 col-span-2 sticky">
        <SidebarComponent />
      </aside>
      <footer className="bg-amber-600 col-span-2 lg:order-4">footer</footer>
    </div>
  );
};

export default DesktopLayout;
