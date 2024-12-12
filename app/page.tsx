"use client";
import { Dispatch, SetStateAction, useState } from "react";

interface ViewProps {
  setIsSimplified: Dispatch<SetStateAction<boolean>>;
}

function View(props: ViewProps) {
  const { setIsSimplified } = props;
  const [enter, setEnter] = useState(0);
  const [leave, setLeave] = useState(0);

  const resetHandler = () => {
    setEnter(0);
    setLeave(0);
  };

  return (
    <>
      <div className="grid grid-cols-2 h-full">
        {/* left column */}
        <button onClick={() => setEnter(enter + 1)}>
          <div className="grid grid-rows-12 h-full items-center justify-center bg-green-600">
            <h1 className="text-center row-span-3 text-4xl font-bold text-gray-900 pt-8">
              進場人數
            </h1>
            {/* flex number display */}
            <div className="row-span-9 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-gray-900 pt-8">{enter}</h1>
              <p className="mt-4 text-lg text-gray-700"> </p>
            </div>
          </div>
        </button>
        {/* right column  */}
        <button onClick={() => setLeave(leave + 1)}>
          <div className="grid grid-rows-12 h-full items-center justify-center bg-red-600">
            <h1 className="text-center row-span-3 text-4xl font-bold text-gray-900 pt-8">
              離場人數
            </h1>
            {/* flex number display */}
            <div className="row-span-9 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-gray-900 pt-8">{leave}</h1>
              <p className="mt-4 text-lg text-gray-700"> </p>
            </div>
          </div>
        </button>
      </div>

      {/* Reset button positioned at the bottom */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 flex flex-col gap-3">
        <button
          onClick={resetHandler}
          className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          重置
        </button>
        <button
          onClick={() => setIsSimplified(false)}
          className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          詳細版
        </button>
      </div>
    </>
  );
}

function DetailedView(props: ViewProps) {
  const { setIsSimplified } = props;
  const [enterCityCounters, setEnterCityCounters] = useState({
    基隆: 0,
    台北: 0,
    桃園: 0,
    新竹: 0,
    苗栗: 0,
    台中: 0,
    彰化: 0,
    南投: 0,
    嘉義: 0,
    台南: 0,
    屏東: 0,
    高雄: 0,
    花蓮: 0,
    金門: 0,
  });
  const [leaveCityCounters, setLeaveCityCounters] = useState({
    基隆: 0,
    台北: 0,
    桃園: 0,
    新竹: 0,
    苗栗: 0,
    台中: 0,
    彰化: 0,
    南投: 0,
    嘉義: 0,
    台南: 0,
    屏東: 0,
    高雄: 0,
    花蓮: 0,
    金門: 0,
  });

  const resetHandler = () => {
    setEnterCityCounters({
      基隆: 0,
      台北: 0,
      桃園: 0,
      新竹: 0,
      苗栗: 0,
      台中: 0,
      彰化: 0,
      南投: 0,
      嘉義: 0,
      台南: 0,
      屏東: 0,
      高雄: 0,
      花蓮: 0,
      金門: 0,
    });
    setLeaveCityCounters({
      基隆: 0,
      台北: 0,
      桃園: 0,
      新竹: 0,
      苗栗: 0,
      台中: 0,
      彰化: 0,
      南投: 0,
      嘉義: 0,
      台南: 0,
      屏東: 0,
      高雄: 0,
      花蓮: 0,
      金門: 0,
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 h-full">
        {/* left column */}
        <div className="grid grid-cols-1 grid-rows-12 h-full items-center justify-center bg-green-600">
          <h1 className="text-center row-span-2 text-4xl font-bold text-gray-900 pt-8">
            進場人數
          </h1>
          <p className="text-center row-span-1">
            <span className="text-2xl font-bold text-gray-900 pt-8">
              {Object.values(enterCityCounters).reduce(
                (total, num) => total + num,
                0
              )}
            </span>
            <span className="text-lg text-gray-700">人</span>
          </p>
          {/* flex number display */}
          <div className="row-span-9 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-y-auto max-h-full">
            {Object.entries(enterCityCounters).map(([city, count]) => (
              <button
                key={city}
                onClick={() =>
                  setEnterCityCounters((prev) => ({
                    ...prev,
                    [city as keyof typeof prev]:
                      prev[city as keyof typeof prev] + 1,
                  }))
                }
                className="px-6 py-3 bg-white rounded-lg hover:bg-gray-100 flex items-center justify-between"
              >
                <span>{city}</span>
                <span className="font-bold">{count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* right column  */}
        <div className="grid grid-cols-1 grid-rows-12 h-full items-center justify-center bg-red-600">
          <h1 className="text-center row-span-2 text-4xl font-bold text-gray-900 pt-8">
            離場人數
          </h1>
          <p className="text-center row-span-1">
            <span className="text-2xl font-bold text-gray-900 pt-8">
              {Object.values(leaveCityCounters).reduce(
                (total, num) => total + num,
                0
              )}
            </span>
            <span className="text-lg text-gray-700">人</span>
          </p>
          {/* flex number display */}
          <div className="row-span-9 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-y-auto max-h-full">
            {Object.entries(leaveCityCounters).map(([city, count]) => (
              <button
                key={city}
                onClick={() =>
                  setLeaveCityCounters((prev) => ({
                    ...prev,
                    [city as keyof typeof prev]:
                      prev[city as keyof typeof prev] + 1,
                  }))
                }
                className="px-6 py-3 bg-white rounded-lg hover:bg-gray-100 flex items-center justify-between"
              >
                <span>{city}</span>
                <span className="font-bold">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reset button positioned at the bottom */}
      <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 flex flex-col gap-3">
        <button
          onClick={resetHandler}
          className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          重置
        </button>
        <button
          onClick={() => setIsSimplified(true)}
          className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          簡易版
        </button>
      </div>
    </>
  );
}

export default function Home() {
  const [isSimplified, setIsSimplified] = useState(false);

  return (
    <main className="relative h-screen">
      {isSimplified ? (
        <View setIsSimplified={setIsSimplified} />
      ) : (
        <DetailedView setIsSimplified={setIsSimplified} />
      )}
    </main>
  );
}
