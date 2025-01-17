import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => {
  const {
    data: { totalViews },
  } = await axios.get(url);
  return totalViews;
};

const useGetViews = (customID, totalViews) => {
  const url = `/api/views/${customID}`;
  const config = {
    fallbackData: totalViews,
  };
  return useSWR(url, fetcher, config);
};

export default useGetViews;
