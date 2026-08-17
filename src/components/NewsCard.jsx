import { Button, Card, Chip, Separator } from "@heroui/react";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";


const NewsCard = ({ n }) => {
  return (
    <Card
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-default-200
        bg-background
        shadow-sm
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-primary/40
        grid grid-cols-3 mt-8
      "
    >
      
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3] overflow-hidden ">
        <Image
          src={n.image_url}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          alt={n.author || n.title}
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* Dark gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/10
            to-transparent
            opacity-70
          "
        />

        {/* Category */}
        <Chip
          size="sm"
          variant="solid"
          className="
            absolute
            right-3
            top-3
            z-10
            border
            border-white/20
            bg-white/90
            font-medium
            text-black
            shadow-lg
            backdrop-blur-md
            transition-transform
            duration-300
            group-hover:scale-105
          "
        >
          {n.category}
        </Chip>

        {/* Floating arrow */}
        <div
          className="
            absolute
            bottom-3
            right-3
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-black
            opacity-0
            shadow-lg
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:rotate-45
          "
        >
          <ArrowBigRight size={20} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-4 sm:p-5">
        {/* Title */}
        <div>
          <h2
            className="
              line-clamp-2
              text-base
              font-semibold
              leading-6
              transition-colors
              duration-300
              group-hover:text-primary
              sm:text-lg
            "
          >
            {n.title}
          </h2>

          {n.author && (
            <p className="mt-1 text-xs text-default-500">
              By {n.author}
            </p>
          )}
        </div>

        {/* Stats */}
        <div
          className="
            flex
            items-center
            justify-between
            rounded-xl
            bg-default-100/70
            px-3
            py-2.5
            transition-colors
            duration-300
            group-hover:bg-primary/5
          "
        >
          <div className="flex items-center gap-2">
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-danger/10
                text-danger
              "
            >
              <FaHeart size={14} />
            </span>

            <div>
              <p className="text-xs text-default-500">Available</p>
              <p className="text-sm font-semibold">
                {n.available_quantity}
              </p>
            </div>
          </div>

          <Separator orientation="vertical" className="h-8" />

          <div className="text-right">
            <p className="text-xs text-default-500">Category</p>
            <p className="text-sm font-medium">{n.category}</p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/newspapers/${n.id}`} className="w-full">
          <Button
            variant="outline"
            className="
              w-full
              rounded-xl
              font-medium
              transition-all
              duration-300
              hover:bg-primary
              hover:text-primary-foreground
              hover:shadow-lg
            "
          >
            View Details
            <BiArrowFromLeft
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default NewsCard;