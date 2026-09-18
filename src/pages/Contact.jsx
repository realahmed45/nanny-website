import PageHero from '../components/PageHero'
import ContactSection from '../components/ContactSection'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="CONTACT US"
        blurb="We are always ready to help you. Send us a note and the team in Bali will get back to you."
      />
      <div className="pt-12">
        <ContactSection />
      </div>
    </>
  )
}
