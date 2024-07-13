type TBeginDate = {
  year?: string;
  month?: string;
  day?: string;
};

const BeginDate = ({ year, month, day }: TBeginDate) => {
  return (
    <div className="flex flex-row">
      {year}년 {month}월 {day}일
    </div>
  );
};

export default BeginDate;
