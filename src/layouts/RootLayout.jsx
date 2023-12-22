import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex gap-5">
      <div className="h-screen flex w-screen">
        <Sidebar />
        <main
          className="flex-1 mx-auto overflow-auto text-gray-100"
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
