// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HangersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HangersvgIcon(props: HangersvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 424 424"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M410.4 312.4L220 188.4v-28.8c24-4 42.4-24.8 42.4-50.4 0-28-22.4-50.4-50.4-50.4s-50.4 22.4-50.4 50.4c0 4.8 3.2 8 8 8s8-3.2 8-8c0-19.2 15.2-34.4 34.4-34.4s34.4 15.2 34.4 34.4-15.2 34.4-34.4 34.4c-4.8 0-8 3.2-8 8v36.8L12.8 313.2c-8 5.6-12.8 14.4-12.8 24 0 15.2 11.2 27.2 25.6 28h372c14.4-.8 26.4-12.8 26.4-28 0-10.4-5.6-19.2-13.6-24.8zM395.2 350H28.8c-7.2 0-12.8-5.6-12.8-12.8 0-4 2.4-8 5.6-10.4L212 202l189.6 123.2c4 2.4 7.2 6.4 7.2 11.2-.8 8-6.4 13.6-13.6 13.6z"
        }
      ></path>
    </svg>
  );
}

export default HangersvgIcon;
/* prettier-ignore-end */
