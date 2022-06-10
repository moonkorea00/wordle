const pixelToRem = size => {
  return `${size / 16}rem`;
};

const theme = {
  fontSize: {
    title: pixelToRem(60),
    subtitle: pixelToRem(30),
    paragraph: pixelToRem(18),
  },
  common: {
    flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  },
  color: {
    black: '#000000',
    grey: '#999999',
    green: '#3cb46e',
    blue: '#000080',
  },
};

export default theme;
