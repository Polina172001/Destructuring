export default function arrDestruction(obj) {
  const {
    id,
    name: nameSpecial,
    icon,
    description = 'Описание недоступно',
  } = obj;
  return {
    id,
    name: nameSpecial,
    icon,
    description,
  };
}
