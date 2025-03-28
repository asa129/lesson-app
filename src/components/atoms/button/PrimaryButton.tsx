import { FC } from "react";

type Props = {
  children: string;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <button>{children}</button>
    </>
  );
};
