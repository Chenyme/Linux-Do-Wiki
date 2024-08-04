import {Tooltip} from "react-tooltip";

const TooltipWrapper = ({tooltipId, children, tooltipChildren}) => {

    const sharpTooltipId = "#" + tooltipId;

    return (
        <div>
            <a
                id={tooltipId}
                data-tooltip-delay-show={200}
                data-tooltip-delay-hide={500}
                data-tooltip-variant="dark"
            >
                {children}
            </a>
            <Tooltip
                anchorSelect={sharpTooltipId}
                clickable
                place="top"
                border="1px solid #ffb003"
                style={{
                    padding: "20px"
                }}
            >
                {tooltipChildren}
            </Tooltip>
        </div>
    );
};

export default TooltipWrapper;