import { useEffect, useState } from "react";

function useDateForEverySecond(startDate) {
  const [date, setDate] = useState(startDate);

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return date;
}

export { useDateForEverySecond };
