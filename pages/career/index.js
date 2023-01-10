import Navbar from "../../components/Navbar";
import CareerCard from "../../components/CareerCard";

export default function Career() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center justify-items-center">
        <div className="w-8/12 mt-20 self-center">
          <h1 className="text-burnt-sienna md:text-5xl font-bold text-3xl text-center">
            My learning history
          </h1>
          <h2 className="text-maize-crayola md:text-2xl font-medium text-center mt-10 text-lg">
            Everything started at my 15's when I discovered Adobe Dreamweaver
            and I started my career as dev, but I didn't know by then. Using
            more drag and drop tools but touching that old HTML code that was
            writing behind made me got some interest in coding. I kept going on
            learning programming languages and tech that made me wanted to
            choose software development not only my career but also my hobby.
          </h2>
        </div>
        <h1 className="mt-20 self-center text-center text-burnt-sienna md:text-4xl text-2xl font-bold">
          2016
        </h1>
        <div className="mt-6 bg-burnt-sienna md:w-8 md:h-8 w-6 h-6 self-center rounded-full"></div>
        <div className="md:flex md:flex-row flex flex-col justify-center justify-items-center items-center content-center md:space-x-40">
          <CareerCard mt={20}/>
          <div></div>
          <CareerCard invisible />
        </div>
      </section>
    </>
  );
}
