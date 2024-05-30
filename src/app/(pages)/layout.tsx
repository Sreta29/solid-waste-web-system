import Navbar from "@/components/layout/navbar/navbar";
import WrapperPage from "@/components/layout/wrapper/wrapper-page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WrapperPage navbar={<Navbar />}>
        <main
          className={`
                border-forground
                mx-auto
                h-full
                max-w-screen-2xl
                space-y-4
                overflow-auto
                py-20
                `}
        >
          {children}
        </main>
      </WrapperPage>
    </>
  );
}
