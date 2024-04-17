import Card from "@/components/card";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 0,
      name: "Mushroom Orange Lamp",
      description: "Test",
      price: 40,
      imageUrl:
        "https://res.cloudinary.com/mullanlighting/c_limit,dpr_2.0,f_auto,h_567,q_80,w_567/media/catalog/product/m/l/mlbwl141antbrs_3_1.jpg",
    },
  ];
  return (
    <main className="min-h-screen mx-auto max-w-[100rem]">
      {products.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </main>
  );
}
