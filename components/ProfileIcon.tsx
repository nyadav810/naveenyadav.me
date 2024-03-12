const ProfileIcon = () => (
  <picture>
    <source
      srcSet="https://d3lhhs2b8t5fnk.cloudfront.net/naveen_in_barcelona.webp"
      type="image/webp"
    />
    <img
      className="self-end rounded-full mx-auto md:max-w-fit animate-fade-in"
      src="https://d3lhhs2b8t5fnk.cloudfront.net/naveen_in_barcelona.png"
      alt="Naveen in Barcelona"
      height={400}
      width={400}
    />
  </picture>
)

export default ProfileIcon
