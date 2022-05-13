import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(...registerables);

export default function PriceChart(props) {
  const labels = props.date;
  const data = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: "open",
        data: props.open,
        borderWidth: 2,
        borderColor: "rgba(159, 184, 155, 1)",
        backgroundColor: "rgba(159, 184, 155, 1)",
        yAxisID: "A",
      },
      {
        type: "line",
        label: "close",
        data: props.close,
        borderWidth: 2,
        borderColor: "rgba(246, 207, 174,1)",
        backgroundColor: "rgba(246, 207, 174, 1)",
        yAxisID: "A",
      },
      {
        type: "line",
        label: "high",
        data: props.high,
        borderWidth: 2,
        borderColor: "rgba(40, 102, 129, 1)",
        backgroundColor: "rgba(40, 102, 129, 1)",
        yAxisID: "A",
      },
      {
        type: "line",
        label: "low",
        data: props.low,
        borderWidth: 2,
        borderColor: "rgba(230, 137, 129, 1)",
        backgroundColor: "rgba(230, 137, 129, 1)",
        yAxisID: "A",
      },
      {
        type: "bar",
        label: "volume",
        data: props.volume,
        borderWidth: 0.5,
        borderColor: "rgba(179, 184, 188, 1)",
        backgroundColor: "rgba(179, 184, 188, 1)",
        yAxisID: "B",
      },
    ],
  };

  if (data === undefined) {
    return <p>Error in data</p>;
  } else if (labels === undefined) {
    return <p>Error in labels</p>;
  } else {
    return (
      <div>
        <Chart
          height={400}
          width={600}
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              A: {
                type: "linear",
                position: "left",
              },
              B: {
                type: "linear",
                position: "right",
              },
            },
          }}
        />
      </div>
    );
  }
}
