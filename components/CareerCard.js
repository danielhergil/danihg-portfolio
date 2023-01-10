import Image from "next/image";
import logo_upm from "../public/images/logo_upm.jpg";

export default function CareerCard(props) {
  return (
    <div
      className={`flex bg-maize-crayola md:w-[500px] md:h-[300px] w-4/5 h-80 rounded-xl p-1 ${
        props.invisible ? "invisible" : ""
      } md:mt-${props.mt} mt-${props.mt - 10}`}
    >
      <div className="bg-persian-green-3 w-full h-full rounded-xl md:flex-row">
        <div className="md:flex-col flex flex-row">
          <Image
            className="flex md:ml-5 md:mt-5 md:p-2 m-4 rounded-3xl"
            alt="Logo UPM"
            src={logo_upm}
          />
          <div className="flex-row m-4">
            <h1 className="font-bold text-xl text-burnt-sienna">UPM</h1>
            <h2 className="font-medium text-maize-crayola text-base">Madrid</h2>
            <h2 className="font-medium text-maize-crayola text-base">09.2010 - 06.2016</h2>
          </div>
        </div>
        <div className="m-4"></div>
      </div>
    </div>
  );
}
