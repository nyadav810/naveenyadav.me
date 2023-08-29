import strings from 'app/en.json'

const ContactForm = () => (
  <section>
    <h3 className="text-xl">{strings.contact}</h3>
    <form>
      <label>{strings.name}</label>
    </form>
  </section>
)

export default ContactForm
