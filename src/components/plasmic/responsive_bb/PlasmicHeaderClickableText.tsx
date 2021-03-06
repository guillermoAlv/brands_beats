// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBcw9dcxKyU36yfsUviVdG
// Component: yLOYoxRMwJ
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
import * as sty from "./PlasmicHeaderClickableText.module.css"; // plasmic-import: yLOYoxRMwJ/css

export type PlasmicHeaderClickableText__VariantMembers = {
  isBold: "isBold";
};

export type PlasmicHeaderClickableText__VariantsArgs = {
  isBold?: SingleBooleanChoiceArg<"isBold">;
};

type VariantPropType = keyof PlasmicHeaderClickableText__VariantsArgs;
export const PlasmicHeaderClickableText__VariantProps = new Array<VariantPropType>(
  "isBold"
);

export type PlasmicHeaderClickableText__ArgsType = {
  text?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHeaderClickableText__ArgsType;
export const PlasmicHeaderClickableText__ArgProps = new Array<ArgPropType>(
  "text"
);

export type PlasmicHeaderClickableText__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultHeaderClickableTextProps {
  text?: React.ReactNode;
  isBold?: SingleBooleanChoiceArg<"isBold">;
  className?: string;
}

function PlasmicHeaderClickableText__RenderFunc(props: {
  variants: PlasmicHeaderClickableText__VariantsArgs;
  args: PlasmicHeaderClickableText__ArgsType;
  overrides: PlasmicHeaderClickableText__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__isBold]: hasVariant(variants, "isBold", "isBold")
      })}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      >
        <p.PlasmicSlot
          defaultContents={"Button text"}
          value={args.text}
          className={classNames(sty.slotText, {
            [sty.slotText__isBold]: hasVariant(variants, "isBold", "isBold")
          })}
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
  PlasmicHeaderClickableText__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHeaderClickableText__VariantsArgs;
  args?: PlasmicHeaderClickableText__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHeaderClickableText__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHeaderClickableText__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeaderClickableText__ArgProps,
      internalVariantPropNames: PlasmicHeaderClickableText__VariantProps
    });

    return PlasmicHeaderClickableText__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeaderClickableText";
  } else {
    func.displayName = `PlasmicHeaderClickableText.${nodeName}`;
  }
  return func;
}

export const PlasmicHeaderClickableText = Object.assign(
  // Top-level PlasmicHeaderClickableText renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicHeaderClickableText
    internalVariantProps: PlasmicHeaderClickableText__VariantProps,
    internalArgProps: PlasmicHeaderClickableText__ArgProps
  }
);

export default PlasmicHeaderClickableText;
/* prettier-ignore-end */
