type Props = {
  label?: string;
};

export function Divider({ label }: Props) {
  return <div className="divider text-2xl text-white">{label}</div>;
}
