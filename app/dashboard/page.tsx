import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function Dashboard() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className=""></main>
      </SidebarProvider>
    </>
  );
}

export default Dashboard;
