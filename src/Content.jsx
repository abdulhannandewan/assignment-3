import MainContent from "./components/MainContent";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Content;
