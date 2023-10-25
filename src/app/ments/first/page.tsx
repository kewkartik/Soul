  "use client";

  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import Image from 'next/image'

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Practice1() {
  return (
      <main className="flex flex-row flex-wrap mx-auto md:px-32 md:py-24">
          <div className="p-6">
          <a href="/ments/second" className="group block">
  <div className="relative h-[350px] sm:h-[450px]">
    <Image
      src="https://i.imgur.com/TvgTExH.jpg"
      alt=""
      width={250}
      height={250}
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-100"
    />

    <img
          src="https://i.imgur.com/TvgTExH.jpg"
          alt=""
          width={250}
          height={250}
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-100"
    />
  </div>

  <div className="mt-3">
    <h3
      className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
    >
     Pepperoni Pizza
    </h3>

    <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
    Pepperoni offers a slightly spicy, meaty flavor to the dough, sauce, cheese combination. The spice often balances the sweetness in the tomato sauce. Also, it complements the fat in the cheese. Combined, the bite is completely satisfying.
    </p>
  </div>
</a>
          </div>
          <div className="p-4">
          <a href="/ments/third" className="group block">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
          src="https://i.imgur.com/fyjCkQF.jpg"
          alt=""
          width={250}
          height={250}
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />

    <img
          src="https://i.imgur.com/fyjCkQF.jpg"
          alt=""
          width={250}
          height={250}
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />
  </div>

  <div className="mt-3">
    <h3
      className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
    >
      Pancake
    </h3>

    <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
    A pancake is a thin, flat, circular piece of cooked batter made from milk, flour, and eggs. Pancakes are often rolled up or folded and eaten hot with a sweet or savoury filling inside.
    </p>
  </div>
</a>
          </div>
          <div className="p-6">
          <a href="/ments/fourth" className="group block">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
          src="https://i.imgur.com/eBUfjmA.jpg"
          alt=""
          width={250}
          height={250}
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
        src="https://i.imgur.com/eBUfjmA.jpg"
        alt=""
        width={250}
        height={250}
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="mt-3">
    <h3
      className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
    >
      Small Headphones
    </h3>

    <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
    A rich and creamy whole-wheat pasta dish filled layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and topped with imported, premium quality mozzarella.
    </p>
  </div>
</a>
          </div>
      </main>
    );
  }
