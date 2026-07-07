import Image from "next/image";
import mainLogo from "@/public/logo.svg";

// =============================
// =========== Locoomo full logo
// =============================
export default function MainLogo() {
  return (
    <div className="flex items-center justify-center gap-3 font-bold font-inter text-xl sm:text-2xl">
      <Image
        src={mainLogo}
        width={24}
        height={4}
        alt="locoomo logo"
        className="flex"
      />
      <h1 className="uppercase text-[#000E2E]">locoomo</h1>
    </div>
  );
}
