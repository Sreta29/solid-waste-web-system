import WrapperPage from "@/components/layout/wrapper/wrapper-page";
import UserSideNav from "./navbar/sidebar/usersidenav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Hello</h1>
      <WrapperPage navbar={<UserSideNav />}>{children}</WrapperPage>
    </>
  );
}
