import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmercard = () => {
  return (
    <div className="Shimmercard">
      <Skeleton height={200} />
      <br />
      <Skeleton />
      <br />
      <Skeleton />
    </div>
  );
};

export default Shimmercard;
