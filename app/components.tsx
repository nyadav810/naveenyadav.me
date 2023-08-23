export const Section = ({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) => {
  return (
    <>
      <h2 className="text-4xl">{title}</h2>
      <section className="flex">{children}</section>
    </>
  )
}
