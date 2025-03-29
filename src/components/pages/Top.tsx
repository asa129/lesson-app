import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { HeaderOnlyLayout } from "../templates/HeaderOnlyLayout";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";

export const Top = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();
  const onClickUserManagement = () => {
    context?.setIsAdmin(true);
    navigate("/users");
  };

  const onClickGeneral = () => {
    context?.setIsAdmin(false);
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
