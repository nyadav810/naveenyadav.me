const List = ({ title, list }: { title: string; list: string[] }) => (
  <div className="basis-1/3">
    <h3 className="font-bold mb-2">{title}</h3>
    <ul className="list-disc pl-4">
      {list.map((entry) => (
        <li className="mb-2" key={entry}>
          {entry}
        </li>
      ))}
    </ul>
  </div>
)

export default List
