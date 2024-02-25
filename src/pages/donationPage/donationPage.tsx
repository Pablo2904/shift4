import { useState } from "react";
import MoneyInput from "../../components/moneyInput/moneyInput";
import DateInput from "../../components/dateInput/dateInput";
import Header from "../../components/header/header";
import Typography from "../../components/typography/typography";
import BlockHeader from "../../components/blockHeader/blockHeader";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import formatMoneyOutput from "../../utils/formatAsMoney";
import "./donationPage.scss";

function DonationPage() {
  const [moneyAmount, setMoneyAmount] = useState(0);
  const [timeData, setTimeData] = useState({
    monthsDifference: 1,
    selectedMonth: "",
  });
  const { isAboveMobile } = useBreakpoint();

  return (
    <div className="donationPage">
      <Header />

      <div className="donationPage__background">
        <main>
          <div className="donationPage__main">
            <BlockHeader />
            <Form>
              <div className="donationPage__form">
                <div className="donationPage__inputs">
                  <div className="donationPage__inputs-element">
                    <Typography variant="label1">I can donate</Typography>
                    <MoneyInput setMoneyAmount={setMoneyAmount} />
                  </div>
                  <div className="donationPage__inputs-element">
                    <Typography variant="label1">Every month until</Typography>
                    <DateInput setTimeData={setTimeData} />
                  </div>
                </div>
                <div className="donationPage__total-info">
                  <div className="donationPage__total">
                    <Typography variant="label2">Total Amount</Typography>
                    <Typography variant="value2">
                      $
                      {formatMoneyOutput(
                        moneyAmount * timeData.monthsDifference
                      )}
                    </Typography>
                  </div>
                  <div className="donationPage__info">
                    <Typography variant="info">
                      You will be sending <b>${moneyAmount}</b> every month,
                      until <b>{timeData.selectedMonth}</b>. Thank you!
                    </Typography>
                  </div>
                </div>
                <div className="donationPage__buttons">
                  {isAboveMobile && <Button variant="outline">Cancel</Button>}
                  <Button variant="filled" type="submit">
                    Donate
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DonationPage;
