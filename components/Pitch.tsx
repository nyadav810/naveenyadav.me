import Emoji from '@/components/ui/emoji'

const Pitch = () => (
  <section className="text-xl md:text-sm pb-4 mr-4 space-y-4">
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
      I&apos;m excited to help you achieve your dreams! Use the form below to
      send me a message!
    </p>
  </section>
)

export default Pitch
