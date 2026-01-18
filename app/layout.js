import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Budget Brain",
  },
  description: "Smart personal finance & budgeting platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>

        <body
          className={`
            ${inter.className}
            min-h-screen
            antialiased
            transition-colors duration-300
          `}
        >
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="min-h-screen px-4 md:px-8 pt-6">
            {children}
          </main>

          {/* Toaster */}
          <Toaster richColors />

          {/* Footer */}
          <footer className="mt-20 border-t border-border bg-transparent">
            <div className="container mx-auto px-4 py-10 text-center">
              <p className="text-sm text-muted-foreground">
                Crafted by <span className="text-neonBlue font-medium">Sakshi</span> 💗
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
