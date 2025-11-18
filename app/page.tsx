import Image from 'next/image';
import ProfileImage from './images/profile.jpg';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-20 mt-[-40px]">
        <div className="w-80 h-80 rounded-full border-[6px] border-yellow-400 overflow-hidden shadow-xl">
          <Image 
            src={ProfileImage} 
            alt="Profile" 
            width={500} 
            height={500}
            className="object-cover"
          />
        </div>

        <p className="text-xl font-semibold text-black mt-4 tracking-wide">
          Jon Paolo Funelas
        </p>
        <p className="text-3xl font-bold text-black -mt-1" style={{ fontFamily: 'Times New Roman, serif' }}>
          "Paolito"
        </p>
      </div>

      {/* Navigation Bar */}
      <Navbar />

    </div>
  );
}
