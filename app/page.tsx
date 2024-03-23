import Header from "@/components/header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col  px-4 md:px-10 lg:px-24">
      <div>
        <Navbar />
        <Header />
      </div>
    </main>
  );
}
