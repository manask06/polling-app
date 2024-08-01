import Sidebar from "@/app/(sidebar)/page";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen bg-white-100 flex">
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20 w-full">
        {children}
      </main>
    </div>
  );
}
