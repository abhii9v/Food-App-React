import "../App.css";
import Shimmercard from "./Shimmercard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Shimmer = () => {
  const shimmerCards = Array(12).fill(<Shimmercard />);
  return (
    <div>
      <div className="ShimmerSearch">
        <Skeleton height={30} />
      </div>

      <div className="ShimmerContainer">{shimmerCards}</div>
    </div>
  );
};

export default Shimmer;
