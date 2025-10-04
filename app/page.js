import Image from "next/image";

export default function Home() {
  return (
      <main className="text-black text-4xl text-center">
      <p>Welcome to QWIIKORDER</p>
      <Image
      src="/myPage.jpg"
      alt="my-image"
      width={300}
      height={300}
      className="w-full h-[500px] "/>

      <div flex px-10>
         <p>Our Favorites</p>
         <Image
         src="/burger.jpg"
         alt="my-image"
         width={100}
         height={100}
         className="w-[300px] h[300px] rounded-full"/>
      </div>
      
      </main>
  );
}
