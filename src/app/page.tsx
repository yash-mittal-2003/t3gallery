import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/db/queries";
import Image from "next/image";
export const dynamic = "force-dynamic";
// const mockUrls = [
//   "https://utfs.io/f/unO1jyZfyPZ3YW79EaDCPewlC0V46EZkvYs2fW3XnH1udjpA",
//   "https://utfs.io/f/unO1jyZfyPZ3J8qlru3DPnvRpOBcDxbF531Eqoi7Iz04aZeQ",
//   "https://utfs.io/f/unO1jyZfyPZ3wZ3hpYucAkjuoh4dKEQi6BxGfaPR1V2e7JHX",
//   "https://utfs.io/f/unO1jyZfyPZ30iyeEWQtbn3aj6W8wNxZYlir0fVmqk95B7cI",
// ];

// const mockImages = mockUrls.map((url, index) => ({
//   id: index+1,
//   url,
// }));
async function Images(){
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...images,...images,...images,...images,...images,...images].map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
        <Link href={`/photos/${image.id}`}>
        <Image
          src={image.url}
          style={{ objectFit: "contain" }}
          width={192}
          height={192}
          alt={image.name}
        />
        </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}
export default async function HomePage() {

  return (
    <main className="">
      
        <SignedOut>
          <div className="h-full w-full text-2xl text-center"> Please sign in above!</div>
        </SignedOut>
        <SignedIn>
          <Images/>
        </SignedIn>
        
    </main>
  );
}
