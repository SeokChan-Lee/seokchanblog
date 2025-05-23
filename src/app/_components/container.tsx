type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="mx-auto px-5 max-w-3xl">{children}</div>;
};

export default Container;
