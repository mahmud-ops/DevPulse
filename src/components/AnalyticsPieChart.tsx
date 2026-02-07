import { PieChart } from "@mui/x-charts/PieChart";
import MUIThemeWrapper from "../utils/MUIThemeWrapper";

export interface PieData {
  id: number | string;
  value: number;
  label: string;
}

interface Props {
  data: PieData[]; // pass an array of data
  colors?: string[];
  width?: number;
  height?: number;
}

const AnalyticsPieChart = ({ data, colors }: Props) => {

  return (
    <MUIThemeWrapper>
      <PieChart
        colors={colors}
        height={200}
        width={200}
        series={[
          {
            data: data.map((item) => ({
              id: item.id,
              value: item.value,
              label: item.label,
            })),
          },
        ]}
      />
    </MUIThemeWrapper>
  );
};

export default AnalyticsPieChart;
