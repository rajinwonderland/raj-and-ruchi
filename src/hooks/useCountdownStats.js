import useCountdownTimer from "./useCountdownTimer";

export default function useCountdownStats() {
  const { month, day, hour, min, sec } = useCountdownTimer();
  const stats = [month, day, hour, min, sec].map((stat, i) => ({
    title: `${
      i === 0
        ? "Months"
        : i === 1
        ? "Days"
        : i === 2
        ? "Hours"
        : i === 3
        ? "Minutes"
        : "Seconds"
    }`,
    value: stat,
  }));
  return stats;
}
