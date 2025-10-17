import Image from "next/image";

export default function Home() {
  return (
    <main className="text-green-700 text-4xl text-center font-bold mt-0 px-0 py-0">
      <section className="bg-gray-100 w-full h-[500px] px-10 mt-5 grid grid-cols-1 px-5 md;mt-5 md;grid-cols-2 lg;grid-cols-4">
        <div className="text-center md:text-left md:w-1/2 gap-4">
          <p className="text-black text-4xl font bold">Order Fresh Meals <br/> Delivered to Your Doorstep</p>
          <p className="text-black text-sm font-bold mt-20">All at affordable prices, and delivered to you in less than 30 minutes</p>
        </div>
        <button className="w-[150px] h-[50px] rounded-full bg-white border border-white flex justify-center items-center mt-5">
          <p className="text-green-600 text-sm hover:grey-200 cursor-pointer">Place order</p>
        </button>

        <div className="flex flex-cols justify-center items-center absolute right-0">
          <Image
          src="/myBulk.jpg"
          alt="my-image"
          width={300}
          height={300}
          className="w-[300px] h[300px] rounded-full items-center  "/>
        </div>
      </section>

      <p className="text-4xl text-black">Our Menu</p>

      <section className="flex flex-cols gap-30 px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        <div>
          <Image
          src="/burger.jpg"
          alt="my-image"
          width={250}
          height={250}
          className="w-[300px] h-[300px] rounded-full"/>
          <p className="text-black text-sm">Burger</p>
        </div>
        <div>
          <Image
          src="/ice cream.jpg"
          alt="my-image"
          width={300}
          height={300}
          className="w-[300px] h-[300px] rounded-full"/>
          <p className="text-black text-sm">Ice Cream</p>
        </div>
        <div>
          <Image
          src="/pizza.jpg"
          alt="my-image"
          width={300}
          height={300}
          className="w-[500px] h-[300px] rounded-full"/>
          <p className="text-black text-sm">Pizza</p>
        </div>
        <div>
          <Image
          src="/smallchops.jpg"
          alt="my-image"
          width={300}
          height={300}
          className="w-[300px] h-[300px] rounded-full"/>
          <p className="text-black text-sm">small chops</p>
        </div>
      </section>
    </main>
  );
}
