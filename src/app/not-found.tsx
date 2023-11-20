import Image from "next/image";
import notFound from "../../public/404.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function Custom404() {
  return (
    <div className=" flex h-screen w-screen flex-col items-center overflow-hidden border border-green-900">
      <Image
        priority
        width={600}
        height={600}
        quality={100}
        src={notFound}
        alt="a woman looking for something while 404 is behind her"
      />
      <div className="absolute bottom-5 flex flex-col items-center gap-2">
        <h1 className="text-lg font-bold">Not Everything has to be found</h1>
        <Button asChild variant="outline">
          <Link href="/">
            <MoveLeft />
            But you can go back home
          </Link>
        </Button>
      </div>
    </div>
  );
}
