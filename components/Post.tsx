import { formatDate } from "lib/formatdate";
import type { Post } from ".contentlayer/generated";
import Section from "./Section";
import Link from "./Link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

type PostProps = {
  post: Post;
  mousePosition?: {
    x: number;
    y: number;
  };
};

export default function Post({ post, mousePosition }: PostProps) {
  const { publishedAt, slug, title, image } = post;
  const publishDate = new Date(publishedAt);
  const showNewBadge =
    Math.abs(new Date(publishDate).getTime() - new Date().getTime()) /
      (24 * 60 * 60 * 1000) <
    30;
  const imageHeight = 150;
  const imageWidth = 300;
  const imageOffset = 22;

  return (
    <li className="py-3 group">
      <div className="transition-opacity">
        {image && mousePosition && (
          <motion.div
            animate={{
              top: mousePosition.y - imageHeight - imageOffset,
              left: mousePosition.x + imageOffset,
            }}
            initial={false}
            transition={{ ease: "easeOut" }}
            style={{ width: imageWidth, height: imageHeight }}
            className="absolute z-10 hidden overflow-hidden rounded shadow-sm pointer-events-none sm:group-hover:block bg-primary"
          >
            <Image
              src={image}
              alt={title}
              width={imageWidth}
              height={imageHeight}
            />
          </motion.div>
        )}
        <Section heading={formatDate(publishedAt)}>
          <Link href={`/blog/${slug}`}>
            {title}
            {showNewBadge && (
              <span className="inline-block relative -top-[1px] font-medium ml-3 text-xs uppercase text-gradient">
                New
              </span>
            )}
          </Link>
          {/* <Image src={image} alt={title} width={imageWidth} height={imageHeight} /> */}
        </Section>
      </div>
    </li>
  );
}
