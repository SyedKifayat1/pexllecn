import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pexlle",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DashboardLayout({
}: {
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="w-64 hidden md:block" />
        <main className="flex-1 pt-16 overflow-x-hidden overflow-y-auto ">
        </main>
      </div>
    </>
  );
}
