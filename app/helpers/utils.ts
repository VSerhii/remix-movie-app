export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatCurrency(amount?: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 0,
    style: 'currency',
  });

  return formatter.format(amount || 0);
}

export function formatRuntime(minutes: number) {
  const seconds = minutes * 60;
  let secondsLeft = seconds;

  // hours
  const hours = Math.floor(secondsLeft / 3600);

  secondsLeft %= 3600;

  // mins
  const mins = Math.floor(secondsLeft / 60);

  secondsLeft %= 60;

  return `${hours ? `${hours}h` : ''} ${mins}min`;
}
