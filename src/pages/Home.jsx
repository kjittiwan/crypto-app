import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable/CoinsTable";

export default function Home() {
  
  return (
    <section className="bg-primary w-screen h-[4000px]">
      <Banner />
      <CoinsTable />
    </section>
  )
}
