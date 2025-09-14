import React from 'react'
import CollectionStoriesRow from './ui/CollectionStoriesRow';

const CollectionStories = () => {
  const stories = [
    {
      image: "/imgs/icon.avif",
      title: "Birth of An Icon",
      description: "The Royal Oak is one of the most famous watchmaking icons whose stories have become myths. Based on an examination of the original archives, numerous interviews and unpublished or published sources, this article offers a fresh look at the different stages and players involved in the creation of the Royal Oak.",
      href: "/watches/royal-oak-selfwinding",
      linkTitle: "Read On AP Chronicles",
    },
    {
      image: "/imgs/women.avif", 
      title: "Royal Oak II: Birth of The First Women’s Model",
      description: "Launched in 1976, the first feminine Royal Oak raised the question of gender in watchmaking and offered a new take on the Royal Oak, wrongly perceived as hyper-masculine in 1972.",
      href: "/watches/royal-oak-selfwinding",            
      linkTitle: "Read On AP Chronicles",
    },
    {
      image: "/imgs/haute.avif", 
      title: "It Takes Time to Create the Extraordinary",
      description: "Haute Horlogerie demands patience and time, being rooted in ancestral techniques and meticulous gestures, most of which are still carried out by hand.",
      href: "/watches/royal-oak-offshore",
      linkTitle: "Learn More",
    },
  ];
  
  return (
    <div className="relative min-h-screen w-full bg-black py-27
      px-6 md:px-8 xl:gap-0
      lg:flex lg:flex-wrap lg:px-[97px] lg:gap-9">
      <div
        className="relative z-10 flex items-end justify-start w-full drop-shadow-2xl
          h-[80%] text-start
          lg:pb-0 lg:items-center lg:top-20"
        >
        <div className="space-y-2 text-left
            md:max-w-[55vw]
            lg:max-w-[30vw]">
          <h1
            className="text-[51px] uppercase leading-9 
              mb-7 md:mb-9 md:text-6xl md:leading-11
              lg:text-7xl andrew">
              The stories behind 
            <br/>
            <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px]">
              Our collection
            </span>
          </h1>      
        </div>
      </div>  
      <div 
        className="flex gap-[10px] 
        overflow-x-auto snap-x snap-mandatory scrollbar-hide md:scrollbar-default
        lg:items-end lg:pl-[1/3]
        lg:-mr-[97px] 2xl:-ml-96"
      >
        <CollectionStoriesRow items={stories} />
      </div>
    </div>
  )
}

export default CollectionStories