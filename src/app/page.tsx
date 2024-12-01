import Link from "next/link";
import { db } from "~/server/db";

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

export default async function HomePage() {

  
  const images = await db.query.images.findMany({
    orderBy:(model, {desc}) => desc(model.id),
  });
 
  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
        

        { [...images,...images,...images].map((image,index) => (
          <div key = {image.id + '-' + index } className="flex w-48 flex-col ">
            <img src = {image.url} alt = "image"/>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
     
    </main>
  );
}
