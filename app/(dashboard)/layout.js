import SideBar from "@/components/SideBar";


export default function RootLayout({ children }) {
  return (
        <div>
          <SideBar/>
          <div className="wrap">{children}</div>
        </div>
  );
}
