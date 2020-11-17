export default function convertMinutesToHours(time: number): string {
  const totalHours = time / 60;
  const hours = Number(totalHours.toFixed(0));
  const minutes = Number(totalHours- hours) * 60;
  return `${hours}:${minutes.toFixed(0)}`;
}