import Navbar from "@/components/Navbar";
import Card from "@/components/[view]/hover_to_reveal/Card";
import { data } from "@/components/[view]/hover_to_reveal/index";
export default function Home() {
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <div className="h-full w-full flex justify-center items-center ">
        <div className="max-w-6xl grid grid-cols-3 gap-5 ">
          {data.map((element) => (
            <Card key={element.id} {...element} />
          ))}
        </div>
      </div>
    </div>
  );
}
