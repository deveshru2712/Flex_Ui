import Navbar from "@/components/Navbar";
import Card from "./Card";
import { data } from "./index";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="w-full flex justify-center items-center py-25 px-4">
        <div className="w-full px-5 lg:px-0 lg:w-4/5 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
          {data.map((element) => (
            <Card key={element.id} {...element} />
          ))}
        </div>
      </div>
    </div>
  );
}
