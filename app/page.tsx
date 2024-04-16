import Card from "@/components/card";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 0,
      name: "Mushroom Orange Lamp",
      description: "Test",
      price: 40,
      imageUrl: "",
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
