// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBcw9dcxKyU36yfsUviVdG
// Component: E4MwO2Nk-p
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
import * as projectcss from "./plasmic_responsive_bb.module.css"; // plasmic-import: wBcw9dcxKyU36yfsUviVdG/projectcss
import * as sty from "./PlasmicDialogClickableText.module.css"; // plasmic-import: E4MwO2Nk-p/css

export type PlasmicDialogClickableText__VariantMembers = {};

export type PlasmicDialogClickableText__VariantsArgs = {};
type VariantPropType = keyof PlasmicDialogClickableText__VariantsArgs;
export const PlasmicDialogClickableText__VariantProps = new Array<VariantPropType>();

export type PlasmicDialogClickableText__ArgsType = {
  text?: React.ReactNode;
};

type ArgPropType = keyof PlasmicDialogClickableText__ArgsType;
export const PlasmicDialogClickableText__ArgProps = new Array<ArgPropType>(
  "text"
);

export type PlasmicDialogClickableText__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultDialogClickableTextProps {
  text?: React.ReactNode;
  className?: string;
}

function PlasmicDialogClickableText__RenderFunc(props: {
  variants: PlasmicDialogClickableText__VariantsArgs;
  args: PlasmicDialogClickableText__ArgsType;
  overrides: PlasmicDialogClickableText__OverridesType;
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
        className={classNames(defaultcss.all, sty.box)}
      >
        <p.PlasmicSlot
          defaultContents={"Button text"}
          value={args.text}
          className={classNames(sty.slotText)}
        />
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
  PlasmicDialogClickableText__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicDialogClickableText__VariantsArgs;
  args?: PlasmicDialogClickableText__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicDialogClickableText__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicDialogClickableText__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicDialogClickableText__ArgProps,
      internalVariantPropNames: PlasmicDialogClickableText__VariantProps
    });

    return PlasmicDialogClickableText__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDialogClickableText";
  } else {
    func.displayName = `PlasmicDialogClickableText.${nodeName}`;
  }
  return func;
}

export const PlasmicDialogClickableText = Object.assign(
  // Top-level PlasmicDialogClickableText renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicDialogClickableText
    internalVariantProps: PlasmicDialogClickableText__VariantProps,
    internalArgProps: PlasmicDialogClickableText__ArgProps
  }
);

export default PlasmicDialogClickableText;
/* prettier-ignore-end */
