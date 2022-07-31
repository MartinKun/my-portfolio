
import { Tooltip } from "reactstrap";
import { useState } from "react";

const Overlay = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <Tooltip
    placement={"bottom"}
    isOpen={tooltipOpen}
    target={props.id}
    toggle={toggle}
  >
    <div style={{"background":"#e2caae","color":"#000000", "marginTop": "15px", "padding":"2px 4px", "borderRadius":"2px"}}>{props.title}</div>
  </Tooltip>
  )
}

export default Overlay