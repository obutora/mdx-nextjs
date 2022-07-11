type Props = {
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-slate-50 border border-teal-600 rounded-xl mx-8 px-4 py-8">
      {children}
    </div>
  );
};

export default Card;
