export function Badge({ title, colorBadge }: { title: string, colorBadge: string; }) {
  return (
    <span className={`bg-${colorBadge}-500 bg-opacity-30 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs`}>{title}</span>
  );
}