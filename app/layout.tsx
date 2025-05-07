// app/layout.tsx
import { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Maintainance from "@/components/Maintainance"; // ✅ Using it as a component

export const metadata: Metadata = {
  title: "Lets Help",
  description: "Helping Palestine and Gaza refugees",
};

const isMaintenance = true; // ⬅️ Toggle ON or OFF

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {isMaintenance ? (
          <Maintainance />
        ) : (
          <AuthProvider>
            <div className="relative z-[1000]">
              <Navbar />
            </div>
            {children}
            <Footer />
          </AuthProvider>
        )}
      </body>
    </html>
  );
}
