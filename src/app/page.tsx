import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/unO1jyZfyPZ3YW79EaDCPewlC0V46EZkvYs2fW3XnH1udjpA",
  "https://utfs.io/f/unO1jyZfyPZ3J8qlru3DPnvRpOBcDxbF531Eqoi7Iz04aZeQ",
  "https://utfs.io/f/unO1jyZfyPZ3wZ3hpYucAkjuoh4dKEQi6BxGfaPR1V2e7JHX",
  "https://utfs.io/f/unO1jyZfyPZ30iyeEWQtbn3aj6W8wNxZYlir0fVmqk95B7cI",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
        { mockImages.map((image) => (
          <div key = {image.id} className="w-48 ">
            <img src = {image.url} alt = "image"/>
          </div>
        ))}
      </div>
     
    </main>
  );
}
