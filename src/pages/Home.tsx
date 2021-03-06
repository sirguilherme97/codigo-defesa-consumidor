import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { Search } from "../Components/Search";
import { SubHeader } from "../Components/SubHeader";
import { T1 } from "../Components/Titulos/T1";
import { T2 } from "../Components/Titulos/T2";
import { T3 } from "../Components/Titulos/T3";
import { T4 } from "../Components/Titulos/T4";
import { T5 } from "../Components/Titulos/T5";
import { T6 } from "../Components/Titulos/T6";


export function Home() {

  return (
    <div className="w-screen h-screen text-zinc-800">
      <Header />
      <SubHeader />
      <Search />
      <T1 />
      <T2 />
      <T3 />
      <T4 />
      <T5 />
      <T6 />
      <Footer />
    </div >
  )
}
