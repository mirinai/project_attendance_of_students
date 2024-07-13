type TBeginTime = {
  hours?: number;
  minutes?: string;
};
const BeginTime = ({ hours, minutes }: TBeginTime) => {
  return (
    <div className="flex flex-row">
      {hours}:{minutes}
    </div>
  );
};
export default BeginTime;
