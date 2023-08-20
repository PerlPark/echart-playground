import { atom } from 'recoil';

export const widthState = atom({
  key: 'widthState',
  default: 320,
});

export const showState = atom({
  key: 'showState',
  default: {
    line: true,
    bar: true,
    pie: true,
    candle: true,
  },
});
