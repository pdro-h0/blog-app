import React from "react";

import { prisma } from "@/lib/prisma";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: +params.id,
    },
  });
  return (
    <div>
      {post && (
        <>
          page: {params.id}
          <br />
          <h1>{post?.title}</h1>
          <p>{post?.content}</p>
        </>
      )}
    </div>
  );
};

export default page;
