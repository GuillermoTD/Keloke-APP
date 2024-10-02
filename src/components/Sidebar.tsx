import HeaderSidebar from './HeaderSidebar';
import SidebarMessage from './SidebarMessage';

const Sidebar = () => {
  return (
    <div className="w-[35%] h-full">
      <HeaderSidebar />
      <div className="SidebarScroll ">
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
      </div>
    </div>
  );
};

export default Sidebar;
