import SideNav from "@/components/layout/navbar/sidebar/sidenav";
import Navbar from "@/components/layout/navbar/topbar/navbar";
import WrapperPage from "@/components/layout/wrapper/wrapper-page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WrapperPage navbar={<SideNav />}>
        <main
          className={`
                h-full
                space-y-4
                overflow-auto
                p-2
                `}
        >
          {children}
        </main>
      </WrapperPage>
    </>
  );
}
