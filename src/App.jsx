import { SearchBar } from "components/SearchBar";
import { Title } from "components/Title";
import { AppLayout } from "components/layouts/AppLayout";

export const App = () => {
  return (
    <AppLayout>
      <Title marginBottom="20px">
        {`국내 모든 임상시험 검색하고 \n 온라인으로 참여하기`}
      </Title>

      <SearchBar />
    </AppLayout>
  );
};
