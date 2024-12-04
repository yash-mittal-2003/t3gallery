import { FullPageImageView } from "~/components/full-image-page";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  // Await params before destructuring
  const { id: photoId } = await params;

  return (
    <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
      <FullPageImageView photoId={photoId} />
    </div>
  );
}
