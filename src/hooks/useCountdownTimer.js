import { useEffect, useState } from "react";

export default function useCountdownTimer() {
  const [year, setY] = useState(0);
  const [month, setM] = useState(0);
  const [day, setD] = useState(0);
  const [hour, setH] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setS] = useState(0);
  const [diff, setDiff] = useState(0);
  const [significance, setSignificance] = useState([
    "year",
    "month",
    "day",
    "hour",
    "min",
    "sec",
  ]);
  const dateTo = "2021-11-31T05:00:00.000+08:00";
  const numberOfFigures = 5;
  const mostSignificantFigure = "month";
  useEffect(() => {
    const dateFrom = Date.now();
    const currentDate = dateFrom ? new Date(dateFrom) : new Date();
    const targetDate = new Date(dateTo);
    setDiff(targetDate - currentDate);
    setY(Math.floor(diff / 31104000000)); // time diff in years
    setM(Math.floor((diff / 2592000000) % 12)); // time diff in months (modulated to 12)
    setD(Math.floor((diff / 86400000) % 30)); // time diff in days (modulated to 30)
    setH(Math.floor((diff / 3600000) % 24)); // time diff's hours (modulated to 24)
    setMin(Math.floor((diff / 60000) % 60)); // time diff's minutes (modulated to 60)
    setS(Math.floor((diff / 1000) % 60)); // time diff's seconds (modulated to 60)

    setSignificance(
      significance.slice(significance.indexOf(mostSignificantFigure))
    );
    setSignificance(significance.slice(0, numberOfFigures));

    if (significance.indexOf("year") === -1) {
      setM(year * 12);
      setY(0);
    }
    if (significance.indexOf("month") === -1) {
      setD(month * 30);
      setM(0);
    }
    if (significance.indexOf("day") === -1) {
      setH(day * 24);
      setD(0);
    }
    if (significance.indexOf("hour") === -1) {
      setMin(hour * 60);
      setH(0);
    }
    if (significance.indexOf("min") === -1) {
      setS(min * 60);
      setMin(0);
    }
  }, [day, hour, min, month, sec, year, diff, significance]);
  if (diff <= 0) {
    return {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
    };
  }
  return {
    year,
    month,
    day,
    hour,
    min,
    sec,
  };
}
