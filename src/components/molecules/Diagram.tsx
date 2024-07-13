import ClassName from "../atom/ClassName";
import BeginDate from "../atom/BeginDate";
import RestNum from "../atom/RestNum";
import BeginTime from "../atom/BeginTime";

type TDiagram = {
  className: string;
  beginDate: {
    year: string;
    month: string;
    day: string;
  };
  restNum: number;
  beginTime: {
    hours: number;
    minutes: string;
  };
};

const Diagram = ({ className, beginDate, beginTime, restNum }: TDiagram) => {
  return (
    <div className="flex">
      <ClassName name={className} />
      <BeginDate
        year={beginDate.year}
        month={beginDate.month}
        day={beginDate.day}
      />
      <RestNum num={restNum} />
      <BeginTime hours={beginTime.hours} minutes={beginTime.minutes} />
    </div>
  );
};
export default Diagram;
