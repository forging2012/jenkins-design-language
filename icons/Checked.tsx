import * as React from 'react';
import { IconProps } from './IconProps';
export function Checked({ className, size = 20, width = size, height = size }: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><rect width="20" height="20" rx="3" fill="#1D7DCF"></rect><path d="M5.00009 0C4.44774 7.55272e-05 4.0001 0.447714 4.00003 1.00007L3.99999 10.0001L1.00007 10C0.447714 10.0001 7.55272e-05 10.4477 0 11.0001C1.07896e-05 11.5524 0.447725 12.0001 1 12.0001L5.00004 12C5.06908 12 5.13649 11.993 5.20157 11.9797C5.65672 11.8866 5.99934 11.4841 6.00005 11.0017C6.00004 11.0011 6.00003 11.0006 6.00002 11.0001M6.00003 10.9954L6.00009 1C6.00007 0.447725 5.55236 1.07896e-05 5.00009 0" transform="translate(12.15 2.25) rotate(45)" fill="white" fillRule="evenodd" clipRule="evenodd"></path></svg>
    );
}
