'use client';

import { widthState } from '@/recoil/options';
import { useRecoilState } from 'recoil';

const Options = () => {
  const [width, setWidth] = useRecoilState(widthState);

  return (
    <div className="m-6 p-5 bg-slate-100 rounded-md">
      <div>
        width:
        <input
          type="text"
          defaultValue={width}
          className="border rounded py-1 px-2 w-16 mx-1 text-right"
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value > 100) {
              setWidth(value);
            }
          }}
        />
        px
      </div>
    </div>
  );
};

export default Options;
