import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-orange-100 px-4">
      <Image
        src="/placeholder.svg?height=180&width=180"
        alt="Dee-licious Bakes Logo"
        width={180}
        height={180}
        className="mb-8"
        priority
      />
      <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4 text-center">
        Coming Soon!
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Dee-licious Bakes is almost ready to sweeten your day.<br />
        We&apos;re baking up something special. Stay tuned!
      </p>
      <div className="flex items-center gap-2 mb-8">
        <Clock className="h-5 w-5 text-green-600" />
        <span className="font-semibold text-gray-600">Launching soon</span>
      </div>
      <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
        <Link href="mailto:hello@dee-licious.com?subject=Notify%20Me%20When%20You%20Launch">
          Notify Me
        </Link>
      </Button>
    </div>
  );
}
