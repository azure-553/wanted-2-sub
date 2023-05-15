import * as _ from "./AppLayout.style";

export const AppLayout = ({ children }) => {
  return (
    <_.AppLayout>
      <_.Main>{children}</_.Main>
    </_.AppLayout>
  );
};
