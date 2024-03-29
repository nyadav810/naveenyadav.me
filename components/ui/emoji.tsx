const Emoji = ({ label, symbol }: { label: string; symbol: string }) => (
  <span
    title={label ? label : ''}
    className="emoji"
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
)

export default Emoji
