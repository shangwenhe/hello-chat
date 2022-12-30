import { FC } from "react";


interface ChatPopoverProps {
  placement?: 'left' | 'right',
  content: string;
}

export default ({ placement = 'left', content }: ChatPopoverProps) => {
  return <>
  <div className={(`adm-popover adm-popover-light adm-popover-${placement}`)}>
    <div className={(`adm-popover-arrow`)}>
      <svg viewBox="0 0 30 16" className="adm-popover-arrow-icon"><g fill="currentColor"><path d="M0,0 L30,0 L18.07289,14.312538 C16.65863,16.009645 14.13637,16.238942 12.43926,14.824685 C12.25341,14.669808 12.08199,14.49839 11.92711,14.312538 L0,0 L0,0 Z"></path></g></svg>
    </div>
      <div className={(`adm-popover-inner`)}>
        <div className="adm-popover-inner-content">
          {content}
        </div>
      </div>
    </div>
  </>
}
