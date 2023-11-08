import React from 'react'
import {PrismaClient} from "@prisma/client"
import PostCard from './PostCard'

const prisma = new PrismaClient()

const bgClasses = [
    'bg-purple-500',
    'bg-teal-500',
    'bg-sky-500',
  ]

const Post = async () => {
    const posts = await prisma.post.findMany()

  return (
    <div>
        <h2 className="text-4xl text-center mt-6">
            TRENDING
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {posts.map((post, index) =>(
                <PostCard key={post.id} post={post} className={bgClasses[index]} />
            ))}
        </div>
    </div>
  )
}

export default Post