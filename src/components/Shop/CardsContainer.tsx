import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardsContainer: FC<Props> = ({ children }) => {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">{children}</div>
    </div>
  );
};
export default CardsContainer;
