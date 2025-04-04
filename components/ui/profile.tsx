import Image from "@/node_modules/next/image";
import MyImage from "@/public/assets/images/me/logo.png";

export default function Profile() {
  return (
    <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
      <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
        {/* Gradient background */}
        <div className="absolute w-full h-full rounded-full">
          <Image
            src={MyImage}
            alt="Nexora Developer photo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Online indicator */}
        <div className="w-3 h-3 rounded-full bg-green-benzol border border-b-blue-cosmos absolute right-0 bottom-5"></div>
      </div>

      {/* Developer text */}
      <div className="text-3xl font-medium ml-3">Nexora </div>
    </div>
  );
}
