import Navbar from "@/components/Navbar";
import Card from "./Card";
import { data } from "./index";

export default function Home() {
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <div className="h-full w-full flex justify-center items-center ">
        <div className="w-4/5 grid  grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
          {data.map((element) => (
            <Card key={element.id} {...element} />
          ))}
        </div>
      </div>
    </div>
  );
}
