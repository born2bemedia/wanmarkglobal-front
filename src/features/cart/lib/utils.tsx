import { icons } from '../lib/assets';

export const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * icons.length);
  const IconComp = icons[randomIndex];

  return <IconComp width="100" height="100" />;
};
