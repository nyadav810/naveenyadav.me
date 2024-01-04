import Emoji from '@/components/ui/emoji'

const Pitch = () => (
  <section className="md:max-w-prose pb-4 space-y-4">
    <p>
      <Emoji symbol="👋" label="wave" /> <b>Hello there! I&apos;m Naveen.</b>
    </p>
    <p>
      I&apos;m passionate about architecting, developing, testing and deploying
      high-performance web apps (<b>React</b>, <b>TypeScript</b>, and <b>AWS</b>{' '}
      are my favorite tools). I&apos;m looking for new opportunities following a
      career break that started in August 2023.
    </p>
    <p>
      Whether you need help launching a website, measuring success metrics, or
      fixing a production outage, my <b>9 years of experience</b> at world-class
      software organizations (Amazon Web Services, GM Cruise, Groupon) are at
      your service.
    </p>
    <p>
      I&apos;m excited to meet and work with you! Use the form below to send me
      a <Emoji symbol="✉️" label="message" />!
    </p>
  </section>
)

export default Pitch
