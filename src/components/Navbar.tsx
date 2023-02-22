import { openSans400 } from "@/app/fonts";
import Link from "next/link";
import { createUniqueKey } from "../utilities/keyCreator";

const Navbar = () => {
  const functionalities = [
    "Background Remover",
    "Create Thumbnails",
    "Image Optimizer",
    "Add Watermark",
  ];

  const formatUrl = (url: string): string => url.toLowerCase().replace(" ", "-");

  return (
    <nav className="w-screen h-[10vh]  flex flex-row items-center">
      <h2 className="w-2/5 pl-12 text-3xl text-white ">Image & Videos Tools</h2>
      <div className="flex flex-row [&>*]:mx-2 [&>*]:px-4 [&>*]:py-2 font-openSans">
        {functionalities.map((functionality) => (
          <Link
            key={createUniqueKey()}
            href={`/${formatUrl(functionality)}`}
            className="duration-300 border-green-800 rounded-sm hover:text-green-500 hover:border-b"
          >
            {functionality}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
