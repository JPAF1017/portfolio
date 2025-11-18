import Image from 'next/image';
import HomeIcon from '../svg/home.svg';
import FolderIcon from '../svg/folder-open.svg';
import ToolBoxIcon from '../svg/tool-box.svg';
import UserIcon from '../svg/user.svg';
import ProfileImage from '../images/profile.jpg';

export default function Navbar() {
  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
      {/* MINI PROFILE */}
      <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg bg-black">
        <Image
          src={ProfileImage}
          alt="Mini Profile"
          width={48}
          height={48}
          className="object-cover"
        />
      </div>

      {/* NAV BAR */}
      <nav className="bg-[#3A2C83]/85 backdrop-blur-md rounded-xl px-12 py-4 shadow-xl flex items-center gap-8">
        <button className="p-2 -m-2 rounded-full hover:bg-white/20 transition-colors">
          <Image src={HomeIcon} alt="Home" width={24} height={24} className="brightness-0 invert" />
        </button>
        <button className="p-2 -m-2 rounded-full hover:bg-white/20 transition-colors">
          <Image src={FolderIcon} alt="Projects" width={24} height={24} className="brightness-0 invert" />
        </button>
        <button className="p-2 -m-2 rounded-full hover:bg-white/20 transition-colors">
          <Image src={ToolBoxIcon} alt="Tools" width={24} height={24} className="brightness-0 invert" />
        </button>
        <button className="p-2 -m-2 rounded-full hover:bg-white/20 transition-colors">
          <Image src={UserIcon} alt="User" width={24} height={24} className="brightness-0 invert" />
        </button>
      </nav>
    </div>
  );
}

