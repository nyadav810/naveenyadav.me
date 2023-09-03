const S3_BUCKET_URL = 'https://s3.us-west-2.amazonaws.com/naveenyadav.me'
const WEBP_SRC = `${S3_BUCKET_URL}/naveen_in_barcelona.webp`
const PNG_SRC = `${S3_BUCKET_URL}/naveen_in_barcelona.png`

const ProfileIcon = () => (
  <picture>
    <source srcSet={WEBP_SRC} type="image/webp" />
    <img
      className="self-end rounded-full mx-auto"
      src={PNG_SRC}
      alt="Naveen in Barcelona"
      height={400}
      width={400}
    />
  </picture>
)

export default ProfileIcon
