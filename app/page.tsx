import Header from "@/components/header";
import HowToStash from "@/components/howtostash";
import Navbar from "@/components/Navbar";
import Main from "@/components/section";
import StashTerminal from "@/components/stash-terminal";

export default function Home() {
  return (
    <main className="flex flex-col  ">
      <div>
        <Navbar />
        <Header />
        <Main />
        <HowToStash />
        <StashTerminal />
      </div>
    </main>
  );
}
