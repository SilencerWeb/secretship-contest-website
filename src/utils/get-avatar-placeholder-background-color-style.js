import { getRandomNumber } from './';


export const getAvatarPlaceholderBackgroundColorStyle = () => {
  const backgroundColors = [ // Colors are taken from macOS Telegram client
    { top: '#ffac8e', bottom: '#ff8597' },
    { top: '#ffdc97', bottom: '#ffc28d' },
    { top: '#a8c8ff', bottom: '#948fff' },
    { top: '#cdffb2', bottom: '#90f4a0' },
    { top: '#8bffee', bottom: '#6af1e2' },
    { top: '#9de3ff', bottom: '#6cc2ff' },
    { top: '#f1c4ff', bottom: '#ee9cff' },
  ];

  const randomNumber = getRandomNumber(0, backgroundColors.length);
  const randomBackgroundColor = backgroundColors[randomNumber];

  return `background-image: linear-gradient(to bottom, ${randomBackgroundColor.top}, ${randomBackgroundColor.bottom});`;
};
