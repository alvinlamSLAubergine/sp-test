import "./list.css"

interface ListItem {
  id: number;
  name: string;
}

interface ListProps {
  items?: ListItem[];
}

export const List = ({ items = [] }: ListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}