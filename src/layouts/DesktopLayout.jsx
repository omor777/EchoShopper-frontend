import { Outlet } from "react-router-dom";
import NavigationBar from "../components/shared/NavigationBar";
import SidebarComponent from "../components/shared/SidebarComponent";
import { Drawer } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/sidebar/sidebarSlice";

const DesktopLayout = () => {
  const { isOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar(false));
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto]  lg:grid-cols-[260px_1fr] container mx-auto ">
      <header className="col-span-2 mb-3 sticky top-0 lg:z-50 z-10">
        <NavigationBar />
      </header>
      <main className="bg-body lg:col-span-1 lg:order-3 lg:p-8 col-span-2 lg:ml-4 lg:ml- p-4 overflow-y-scroll">
        <Outlet />
      </main>
      <aside className=" lg:col-span-1 lg:order-2 col-span-2 h-fit">
        <div className="lg:block hidden">
          <SidebarComponent />
        </div>
        <div className="lg:hidden">
          <Drawer open={isOpen} backdrop={false} onClose={handleCloseSidebar}>
            <Drawer.Header title="EchoShopper" titleIcon={() => <></>} />

            <Drawer.Items>
              <SidebarComponent />
            </Drawer.Items>
          </Drawer>
        </div>
      </aside>
      <footer className="bg-amber-600 col-span-2 lg:order-4">footer</footer>
    </div>
  );
};

export default DesktopLayout;
