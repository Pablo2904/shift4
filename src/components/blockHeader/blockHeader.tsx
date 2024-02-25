import { ReactComponent as GivingBlock } from "../../assets/images/GivingBlock_64.svg";
import Typography from "../typography/typography";
import "./blockHeader.scss";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import Button from "../button/button";
import { ReactComponent as CloseBtn } from "../../assets/images/close_btn.svg";

const BlockHeader = () => {
  const { isMobile } = useBreakpoint();
  return (
    <div className="givingBlock">
      <GivingBlock />
      <div className="givingBlock__text">
        <Typography variant="h1">The giving block</Typography>
        <Typography variant="subtitle1">Set up your donation goal!</Typography>
      </div>
      {isMobile && (
        <Button variant="image" className="givingBlock__close_btn">
          <CloseBtn />
        </Button>
      )}
    </div>
  );
};

export default BlockHeader;
