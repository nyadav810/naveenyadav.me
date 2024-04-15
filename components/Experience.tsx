import { format } from 'date-fns'

import Emoji from '@/components/ui/emoji'
import { cn } from '@/lib/utils'

import { WorkExperienceEntry } from './Timeline'

const EXP_DATE_FORMAT = 'M/yy'

type Props = WorkExperienceEntry & { last: boolean }

const Experience = ({
  employer,
  title,
  startDate,
  endDate,
  location,
  description,
  last,
}: Props) => (
  <div className="flex items-center">
    <div className="text-sm md:text-right pe-2 md:pe-4 min-w-14 w-28">
      {`${format(startDate, EXP_DATE_FORMAT)} - ${endDate ? format(endDate, EXP_DATE_FORMAT) : 'Present'}`}
    </div>
    <div className="border-4 border-blue-600 rounded-br-full rounded-tr-full"></div>
    <div className="flex-grow border-l-4 border-black ps-2 md:ps-4">
      <h4>{employer}</h4>
      <h5 className="pb-1">{title}</h5>
      <h6 className="text-sm pb-2">
        <Emoji symbol="📍" label="round pushpin" /> {location}
      </h6>
      <p className={cn(...['text-sm max-w-prose', last ? '' : 'pb-4'])}>
        {description}
      </p>
    </div>
  </div>
)

export default Experience
