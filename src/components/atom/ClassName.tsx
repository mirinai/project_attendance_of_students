type TClassName = {
  name?: string;
};

const ClassName = ({ name }: TClassName) => {
  return <div>{name}</div>;
};
export default ClassName;
