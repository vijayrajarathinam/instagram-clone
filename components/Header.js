import Image from "next/image";
import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-5 xl:mx-auto">
        <div className="relative hidden lg:inline-grid h-10 w-24 cursor-pointer">
          <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
        </div>
        <div className="relative lg:hidden flex-shrink-0 h-10 w-10 cursor-pointer">
          <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
        </div>
        {/* searchbar */}
        <div className="w-3/5">
          {/* max-w-xs */}
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block w-full pl-10 bg-gray-50 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
        {/* right icons */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="nabBtn" />
          <MenuIcon className="h-10 w-10 md:hidden cursor-pointers" />
          <div className="relative nabBtn">
            <PaperAirplaneIcon className="nabBtn rotate-45" />
            <div className="absolute -top-1 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="nabBtn" />
          <UserGroupIcon className="nabBtn" />
          <HeartIcon className="nabBtn" />
          <img
            src="https://lh3.googleusercontent.com/ogw/ADea4I6n_-mfB3piKg9NozeYc0gDArHYLJYIal4cGpEIYDM=s64-c-mo"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
