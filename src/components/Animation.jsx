import { useState, useEffect } from "react";
import { Train, MapPin } from "lucide-react";

export const YamanoteLineToOosaki = () => {
  const [trainAngle, setTrainAngle] = useState(180);
  const [isMoving, setIsMoving] = useState(true);

  const radius = 150;
  const centerX = 200;
  const centerY = 250;

  const stations = [
    { name: "東京", angle: 180, color: "#f472b6" },
    { name: "新橋", angle: 144, color: "#60a5fa" },
    { name: "浜松町", angle: 108, color: "#4ade80" },
    { name: "田町", angle: 72, color: "#fbbf24" },
    { name: "品川", angle: 36, color: "#a78bfa" },
    { name: "大崎", angle: 0, color: "#fb923c" },
  ];

  const getCoordinates = (angle) => {
    const radian = angle * (Math.PI / 180);
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY - radius * Math.sin(radian),
    };
  };

  useEffect(() => {
    if (!isMoving) return;

    const interval = setInterval(() => {
      setTrainAngle((prev) => {
        const nextAngle = prev - 36;
        if (nextAngle <= 0) {
          setIsMoving(false);
          return 0;
        }
        return nextAngle;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isMoving]);

  const handleMouseEnter = () => {
    if (!isMoving) {
      setTrainAngle(180);
      setIsMoving(true);
    }
  };

  const trainPos = getCoordinates(trainAngle);
  return (
    <div className="max-w-2xl mx-auto p-8">
      <div
        className="rounded-2xl shadow-md p-6 bg-neutral-300"
        onMouseEnter={handleMouseEnter}
      >
        <svg width="540" height="300" className="ml-20 mb-10">
          {/* circle train track */}
          <path
            d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 1 1 ${
              centerX + radius
            } ${centerY}`}
            fill="none"
            className="stroke-4 stroke-green-200"
          />
          <path
            d={`M ${centerX - radius - 5} ${centerY} A ${radius + 5} ${
              radius + 5
            } 0 1 1 ${centerX + radius + 5} ${centerY}`}
            fill="none"
            className="stroke-2 stroke-green-100"
          />

          {/* station */}
          {stations.map((station) => {
            const pos = getCoordinates(station.angle);
            const isTop = station.angle > 90;
            return (
              <g key={station.name}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="12"
                  className="fill-white shadow-sm"
                />
                {/* station pin */}
                <g transform={`translate(${pos.x - 8}, ${pos.y - 8})`}>
                  <MapPin size={16} style={{ color: station.color }} />
                </g>
                {/* station bg */}
                <rect
                  x={pos.x - 30}
                  y={isTop ? pos.y - 35 : pos.y + 15}
                  width="60"
                  height="20"
                  rx="10"
                  className="fill-white/90"
                />
                {/* station name */}
                <text
                  x={pos.x}
                  y={isTop ? pos.y - 20 : pos.y + 30}
                  textAnchor="middle"
                  className="text-xs font-bold fill-gray-600"
                >
                  {station.name}
                </text>
              </g>
            );
          })}

          {/* train */}
          <g
            transform={`translate(${trainPos.x}, ${trainPos.y}) rotate(${
              90 - trainAngle
            })`}
            className="transition-all duration-1000 ease-in-out"
          >
            <rect
              x="-20"
              y="-12"
              width="40"
              height="24"
              rx="8"
              className="fill-green-500 shadow-lg"
            />
            <g transform="translate(-8, -8)">
              <Train size={16} className="text-white" />
            </g>
          </g>
        </svg>

        <div className="mt-6 text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-white shadow-sm">
            <span className="text-sm font-medium text-gray-600">
              勤務地：大崎
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const YamanoteLineToHamamatsucho = () => {
  const [trainAngle, setTrainAngle] = useState(0);
  const [isMoving, setIsMoving] = useState(true);

  const radius = 150;
  const centerX = 200;
  const centerY = 250;

  const stations = [
    { name: "東京", angle: 180, color: "#f472b6" },
    { name: "新橋", angle: 144, color: "#60a5fa" },
    { name: "浜松町", angle: 108, color: "#4ade80" },
    { name: "田町", angle: 72, color: "#fbbf24" },
    { name: "品川", angle: 36, color: "#a78bfa" },
    { name: "大崎", angle: 0, color: "#fb923c" },
  ];

  const getCoordinates = (angle) => {
    const radian = angle * (Math.PI / 180);
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY - radius * Math.sin(radian),
    };
  };

  useEffect(() => {
    if (!isMoving) return;

    const interval = setInterval(() => {
      setTrainAngle((prev) => {
        const nextAngle = prev + 36;
        if (nextAngle >= 108) {
          setIsMoving(false);
          return 108;
        }
        return nextAngle;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isMoving]);

  const handleMouseEnter = () => {
    if (!isMoving) {
      setTrainAngle(0);
      setIsMoving(true);
    }
  };

  const trainPos = getCoordinates(trainAngle);
  return (
    <div className="max-w-2xl mx-auto p-8">
      <div
        className="rounded-2xl shadow-md p-6 bg-neutral-300"
        onMouseEnter={handleMouseEnter}
      >
        <svg width="540" height="300" className="ml-20 mb-10">
          <path
            d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 1 1 ${
              centerX + radius
            } ${centerY}`}
            fill="none"
            className="stroke-4 stroke-green-200"
          />
          <path
            d={`M ${centerX - radius - 5} ${centerY} A ${radius + 5} ${
              radius + 5
            } 0 1 1 ${centerX + radius + 5} ${centerY}`}
            fill="none"
            className="stroke-2 stroke-green-100"
          />

          {/* station */}
          {stations.map((station) => {
            const pos = getCoordinates(station.angle);
            const isTop = station.angle > 90;
            return (
              <g key={station.name}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="12"
                  className="fill-white shadow-sm"
                />
                {/* station pin */}
                <g transform={`translate(${pos.x - 8}, ${pos.y - 8})`}>
                  <MapPin size={16} style={{ color: station.color }} />
                </g>
                {/* station bg */}
                <rect
                  x={pos.x - 30}
                  y={isTop ? pos.y - 35 : pos.y + 15}
                  width="60"
                  height="20"
                  rx="10"
                  className="fill-white/90"
                />
                {/* station name */}
                <text
                  x={pos.x}
                  y={isTop ? pos.y - 20 : pos.y + 30}
                  textAnchor="middle"
                  className="text-xs font-bold fill-gray-600"
                >
                  {station.name}
                </text>
              </g>
            );
          })}

          {/* train */}
          <g
            transform={`translate(${trainPos.x}, ${trainPos.y}) rotate(${
              90 - trainAngle
            })`}
            className="transition-all duration-1000 ease-in-out"
          >
            <rect
              x="-20"
              y="-12"
              width="40"
              height="24"
              rx="8"
              className="fill-green-500 shadow-lg"
            />
            <g transform="translate(-8, -8)">
              <Train size={16} className="text-white" />
            </g>
          </g>
        </svg>

        <div className="mt-6 text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-white shadow-sm">
            <span className="text-sm font-medium text-gray-600">
              勤務地：浜松町
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
