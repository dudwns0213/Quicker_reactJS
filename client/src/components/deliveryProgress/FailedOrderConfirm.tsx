import { ExecutionComponentProps } from "../../pages/ExecutionPage"
import { useClientConfirmState } from "../../pages/ClientConfirmPage"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ConfirmBtn from "../confirmBtn"
import { WriteTransactionToBlockchain } from "../../utils/ExecuteOrderFromBlockchain"

export default function FailedOrderConfirm({ orderNum }: ExecutionComponentProps) {
    const { setTitle } = useClientConfirmState()
    const navigate = useNavigate()

    const confirmLogic = async () => {
      if (orderNum !== undefined) {
        const wttb = new WriteTransactionToBlockchain(orderNum);
        try {
          const reult = await wttb.failedOrder();
          console.log(reult);
          navigate("/");
        } catch (e) {
          console.log(e);
        }
      }
    }

    useEffect(() => {
        setTitle("배송결과")
        // 보증금 === 0 확인버튼 비활성화
    }, [])
    
    return <><div>배송실패</div>
        <div>첨부사진</div>
        <div>실패사유</div>
        <ConfirmBtn
            content="확인"
            confirmLogic={async() => {
              await confirmLogic();
            }}
          />
    </>
}