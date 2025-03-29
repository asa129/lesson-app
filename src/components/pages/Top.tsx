import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { HeaderOnlyLayout } from "../templates/HeaderOnlyLayout";

export const Top = () => {
  const navigate = useNavigate();
  const onClickUserManagement = () => {
    navigate("/users", { state: { isAdmin: true } });
  };

  const onClickGeneral = () => {
    navigate("/users", { state: { isAdmin: false } });
  };

  return (
    <>
      <HeaderOnlyLayout>
        <br />
        <h3>トップ画面だよ</h3>
        <br />
        <SecondaryButton onClick={onClickUserManagement}>
          管理者ユーザー
        </SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      </HeaderOnlyLayout>
    </>
  );
};
