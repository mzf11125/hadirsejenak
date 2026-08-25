export default function SectionHead({
  num,
  title,
  note,
}: {
  num?: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="sec-head">
      {num && <div className="sec-num">{num}</div>}
      <h2>{title}</h2>
      {note && <div className="note">{note}</div>}
    </div>
  );
}