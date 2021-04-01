// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDcLAAzBYxMBQFp3GHSHfW
// Component: kpJaxtJ4t1
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_brands_beats.module.css"; // plasmic-import: tDcLAAzBYxMBQFp3GHSHfW/projectcss
import * as sty from "./PlasmicHeaderMenuButton.module.css"; // plasmic-import: kpJaxtJ4t1/css

import GlassIconsvgIcon from "./icons/PlasmicIcon__GlassIconsvg"; // plasmic-import: yoGL-371c1/icon

export type PlasmicHeaderMenuButton__VariantMembers = {};

export type PlasmicHeaderMenuButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeaderMenuButton__VariantsArgs;
export const PlasmicHeaderMenuButton__VariantProps = new Array<VariantPropType>();

export type PlasmicHeaderMenuButton__ArgsType = {};
type ArgPropType = keyof PlasmicHeaderMenuButton__ArgsType;
export const PlasmicHeaderMenuButton__ArgProps = new Array<ArgPropType>();

export type PlasmicHeaderMenuButton__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultHeaderMenuButtonProps {
  className?: string;
}

function PlasmicHeaderMenuButton__RenderFunc(props: {
  variants: PlasmicHeaderMenuButton__VariantsArgs;
  args: PlasmicHeaderMenuButton__ArgsType;
  overrides: PlasmicHeaderMenuButton__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <GlassIconsvgIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg)}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeaderMenuButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHeaderMenuButton__VariantsArgs;
  args?: PlasmicHeaderMenuButton__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHeaderMenuButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHeaderMenuButton__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeaderMenuButton__ArgProps,
      internalVariantPropNames: PlasmicHeaderMenuButton__VariantProps
    });

    return PlasmicHeaderMenuButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeaderMenuButton";
  } else {
    func.displayName = `PlasmicHeaderMenuButton.${nodeName}`;
  }
  return func;
}

export const PlasmicHeaderMenuButton = Object.assign(
  // Top-level PlasmicHeaderMenuButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicHeaderMenuButton
    internalVariantProps: PlasmicHeaderMenuButton__VariantProps,
    internalArgProps: PlasmicHeaderMenuButton__ArgProps
  }
);

export default PlasmicHeaderMenuButton;
/* prettier-ignore-end */
