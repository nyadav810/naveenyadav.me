import Image from 'next/image'

import { SectionEntry } from './types'

export const Section = ({
  title,
  entries = [],
}: {
  title: string
  entries?: SectionEntry[]
}) => {
  return (
    <>
      <h2 className="text-4xl">{title}</h2>
      <section className="flex flex-wrap gap-4">
        {entries.map(({ id, img, name, url }) => (
          <div
            key={id}
            className="flex items-center justify-center flex-1 p-4 md:h-24 lg:h-28 bg-white border-2 border-gray-300 rounded"
          >
            <a href={url} target="_blank">
              <Image
                src={`/images/${img.src}`}
                alt={name}
                width={img.width}
                height={img.height}
              />
            </a>
          </div>
        ))}
      </section>
    </>
  )
}
