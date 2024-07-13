import Diagram from "../molecules/Diagram";

const Main = () => {
  const diagramsData = [
    {
      className: "C",
      beginDate: { year: "2024", month: "03", day: "01" },
      restNum: 9,
      beginTime: { hours: 9, minutes: "00" },
    },
    {
      className: "C++",
      beginDate: { year: "2024", month: "04", day: "02" },
      restNum: 5,
      beginTime: { hours: 10, minutes: "00" },
    },
    {
      className: "Python",
      beginDate: { year: "2024", month: "05", day: "03" },
      restNum: 12,
      beginTime: { hours: 11, minutes: "00" },
    },
  ];
  return (
    <div>
      {diagramsData.map((v, i) => (
        <Diagram
          className={v.className}
          beginDate={v.beginDate}
          beginTime={v.beginTime}
          restNum={v.restNum}
        />
      ))}
    </div>
  );
};

export default Main;
