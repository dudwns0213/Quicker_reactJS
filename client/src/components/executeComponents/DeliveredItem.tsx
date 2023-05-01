import ConfirmBtn from "../confirmBtn";
import { useState, useEffect } from "react";
import { useExecutionState } from "../../pages/ExecutionPage";
import FaceToFaceDelivery from "./FaceToFaceDelivery";
import RemoteDelivery from "./RemoteDelivery";
import styled from "styled-components";
import { ExecutionComponentProps } from "../../pages/ExecutionPage";
import { WriteTransactionToBlockchain } from "../../utils/ExecuteOrderFromBlockchain";
import WaitClientConfirm from "./WaitClientConfirm";

const Div0 = styled.div`
  display: flex;
  height: 3.875rem;
`;

const Div1 = styled.div`
  flex: 1 1 50%;
`;

const Btwal = styled.button`
  width: 100%;
  height: 2.25rem;
  font-size: var(--font-md1);
  font-weight: bold;

  border: 0rem;
  outline: #efefef;
  background-color: #ffffff;
  padding-left: 0.625rem;
  text-align: center;

  &:focus {
    border-bottom: 0.125rem solid #0070f3;
  }
`;

export default function DeliveredItem({ orderNum }: ExecutionComponentProps) {
  const { setTitle } = useExecutionState();
  const [isFace, setIsFace] = useState<boolean>(true);

  useEffect(() => {
    setTitle("물품전달");
  }, []);

  return (
    <>
          <Div0>
            <Div1>
              <Btwal onClick={() => setIsFace(true)}>대면</Btwal>
            </Div1>
            <Div1>
              <Btwal onClick={() => setIsFace(false)}>비대면</Btwal>
            </Div1>
          </Div0>
          {isFace ? <FaceToFaceDelivery orderNum={orderNum}/> : <RemoteDelivery orderNum={orderNum}/>}
        </>
  );
}
