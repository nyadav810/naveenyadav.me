import Emoji from '@/components/ui/emoji'

const Pitch = () => (
  <section className="md:max-w-prose pb-4 space-y-4">
    <p>
      <Emoji symbol="👋" label="wave" /> <b>Hello there! I&apos;m Naveen.</b>
    </p>
    <p>
      I&apos;m a Senior Software Engineer turned freelancer. I&apos;m passionate
      about building delightful and performant web apps (<b>TypeScript</b> and{' '}
      <b>React</b> are my <Emoji symbol="🍞" label="bread" /> and{' '}
      <Emoji symbol="🧈" label="butter" />
      ), and architecting serverless applications in the cloud (<b>AWS</b> is my
      go-to <Emoji symbol="☁️" label="cloud" />
      ).
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
