import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "~/server/db";


export async function getMyImages(){

    const user = auth();
    const myId = (await user).userId;
    if(!(await user).userId) throw new Error("Unauthorized");

    const images = await db.query.images.findMany({
        where:  (model, {eq}) => eq(model.userId, myId!),
        orderBy:(model, {desc}) => desc(model.id),
      });
      return images;
    
}

export async function getImage(id: number) {
  const user = auth();
  if (!(await user).userId) throw new Error("Unauthorized");
  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });
  if (!image) throw new Error("Image not found");
  if (image.userId !== (await user).userId) throw new Error("Unauthorized");
  return image;
}