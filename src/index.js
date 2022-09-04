export default function checkHealth({ health }) {
  if (health < 15 && health >= 0) return 'critical';
  if (health > 50 && health <= 100) return 'healthy';
  if (health >= 15 && health <= 50) return 'wounded';
  return null;
}
