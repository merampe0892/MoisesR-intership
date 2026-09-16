import { useEffect, useState } from "react";

const Countdown = ({ expiryDate }) => {
  const getTimeLeft = () => {
    return new Date(expiryDate).getTime() - Date.now();
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    let frameId;

    const updateTime = () => {
      const remaining = getTimeLeft();
      setTimeLeft(remaining);

      if (remaining > 0) {
        frameId = requestAnimationFrame(updateTime);
      }
    };

    frameId = requestAnimationFrame(updateTime);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [expiryDate]);

  if (timeLeft <= 0) {
    return <div className="de_countdown">EXPIRED</div>;
  }

  const totalSeconds = Math.floor(timeLeft / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="de_countdown">
      {hours}h {minutes}m {seconds}s
    </div>
  );
};

export default Countdown;
