export const getStatusConfig = (status: Personagem['status']): { color: string, emoji: string } => {
  let color = '';
  let emoji = '';

  switch (status) {
    case 'Alive':
      color = `text-${status.toString().toLowerCase()}`;
      emoji = '❤️';
      break;

    case 'Dead':
      color = `text-${status.toString().toLowerCase()}`;
      emoji = '💀';
      break;

    case 'unknown':
      color = `text-${status.toString().toLowerCase()}`;
      emoji = '❓';
      break;
  }
  return { color: color, emoji: emoji };
};
