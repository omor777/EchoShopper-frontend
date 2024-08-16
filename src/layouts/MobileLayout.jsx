import { Outlet } from "react-router-dom";
import NavigationBar from "../components/shared/NavigationBar";
import SidebarComponent from "../components/shared/SidebarComponent";

const MobileLayout = () => {
  return (
    <div className="grid grid-cols-1 grid-rows[auto_1fr_auto] container mx-auto">
      <header className="col-span-1">
        <NavigationBar />
      </header>
      <main className="col-span-1">
        <Outlet />
      </main>
      <aside className="col-span-1">
        <SidebarComponent />
      </aside>
      <footer className="col-span-1">footer</footer>
    </div>
  );
};

export default MobileLayout;
