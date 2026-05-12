export const getStatusConfig = (status: Personagem['status']): { color: string, emoji: string } => {
  let color = '';
  let emoji = '';

  switch (status) {
    case 'Alive':
      color = 'text-alive';
      emoji = '❤️';
      break;

    case 'Dead':
      color = 'text-dead';
      emoji = '💀';
      break;

    case 'unknown':
      color = 'text-unknown';
      emoji = '❓';
      break;
  }
  return { color, emoji };
};
