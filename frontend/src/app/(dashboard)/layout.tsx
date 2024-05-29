import { SideBar } from "@/components/sidebars";
import { AuthenticatedNav } from "@/components/navs";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <SideBar />

        <section className="w-full   min-[900px]:pl-[80px]  absolute top-0 left-0 ">
          <header className="w-full  bg-foreground dark:bg-dark-foreground">
            <AuthenticatedNav />
          </header>
          {children}
        </section>
      </main>
    </>
  );
}
