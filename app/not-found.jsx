import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neonBlue/20 blur-[120px] rounded-full" />
      </div>

      {/* Glass Card */}
      <div
        className="
          bg-panel backdrop-blur-glass
          border border-panelBorder
          rounded-3xl
          shadow-glass
          px-10 py-16
          text-center
          max-w-lg w-full
        "
      >
        <h1 className="text-7xl font-extrabold gradient-title mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold mb-3">
          Page Not Found
        </h2>

        <p className="text-muted-foreground mb-10">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
        </p>

        <Link href="/">
          <Button
            size="lg"
            className="
              bg-neonBlue text-black
              hover:shadow-glowBlue
              transition
            "
          >
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}


