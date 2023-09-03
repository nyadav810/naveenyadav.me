const ProfileIcon = () => (
  <picture>
    <source
      srcSet="https://s3.us-west-2.amazonaws.com/naveenyadav.me/naveen_in_barcelona.webp"
      type="image/webp"
    />
    <img
      className="self-end rounded-full mx-auto"
      src="https://s3.us-west-2.amazonaws.com/naveenyadav.me/naveen_in_barcelona.webp"
      alt="Naveen in Barcelona"
      height={400}
      width={400}
    />
  </picture>
)

export default ProfileIcon
