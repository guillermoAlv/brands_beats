// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDcLAAzBYxMBQFp3GHSHfW
// Component: YZ5pqHoeK_
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
import * as sty from "./PlasmicLogoText.module.css"; // plasmic-import: YZ5pqHoeK_/css

export type PlasmicLogoText__VariantMembers = {};

export type PlasmicLogoText__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogoText__VariantsArgs;
export const PlasmicLogoText__VariantProps = new Array<VariantPropType>();

export type PlasmicLogoText__ArgsType = {};
type ArgPropType = keyof PlasmicLogoText__ArgsType;
export const PlasmicLogoText__ArgProps = new Array<ArgPropType>();

export type PlasmicLogoText__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultLogoTextProps {
  className?: string;
}

function PlasmicLogoText__RenderFunc(props: {
  variants: PlasmicLogoText__VariantsArgs;
  args: PlasmicLogoText__ArgsType;
  overrides: PlasmicLogoText__OverridesType;
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
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, defaultcss.__wab_text, sty.box)}
      >
        {"Brands Beats"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogoText__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicLogoText__VariantsArgs;
  args?: PlasmicLogoText__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicLogoText__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicLogoText__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLogoText__ArgProps,
      internalVariantPropNames: PlasmicLogoText__VariantProps
    });

    return PlasmicLogoText__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogoText";
  } else {
    func.displayName = `PlasmicLogoText.${nodeName}`;
  }
  return func;
}

export const PlasmicLogoText = Object.assign(
  // Top-level PlasmicLogoText renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicLogoText
    internalVariantProps: PlasmicLogoText__VariantProps,
    internalArgProps: PlasmicLogoText__ArgProps
  }
);

export default PlasmicLogoText;
/* prettier-ignore-end */
