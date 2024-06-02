import WrapperPage from "@/components/layout/wrapper/wrapper-page";
import UserSideNav from "./navbar/sidebar/usersidenav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WrapperPage navbar={<UserSideNav />}>{children}</WrapperPage>
    </>
  );
}
