import React from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import CustomButton from "@/components/ui/custom-button";

export default function Overlay({btnText, tooltipText = ""}: { btnText: string, tooltipText: string }) {
  return (
    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-right">{tooltipText}</Tooltip>}>
      <CustomButton variant={"secondary"} text={btnText}/>
    </OverlayTrigger>
  );
}
