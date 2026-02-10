import AnalyticsPieChart from "../components/AnalyticsPieChart";
import PageHeading from "../components/PageHeading";
import { stateData } from "../features/ProjectAnalytics";

const AnalyticsPage = () => {
  return (
    <>
      <PageHeading title="Analytics" />
      <AnalyticsPieChart data={stateData} />
    </>
  );
};

export default AnalyticsPage;
