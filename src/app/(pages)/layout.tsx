import SideNav from "@/components/layout/navbar/sidebar/sidenav";
import WrapperPage from "@/components/layout/wrapper/wrapper-page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WrapperPage navbar={<SideNav />}>{children}</WrapperPage>
    </>
  );
}
