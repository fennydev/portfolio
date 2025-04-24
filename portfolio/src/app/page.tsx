import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div>
        <Header />
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-start gap-4">
        <h1 className="text-4xl font-bold">Hello, I'm Fenil Mehta 👋</h1>
        <p className="text-lg text-gray-500">Full Stack Developer</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <p className="text-lg text-gray-500">Welcome to my portfolio website!</p>
      </div>

      <footer className="text-sm text-gray-500">
        © 2025 Fenil Mehta
      </footer>
    </div>
    </div>
    
  );
}

