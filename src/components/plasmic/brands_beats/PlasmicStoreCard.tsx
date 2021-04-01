// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDcLAAzBYxMBQFp3GHSHfW
// Component: 8u0cQjf0oM
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
import StoreCard from "../../StoreCard"; // plasmic-import: POlLgbVSFD/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_brands_beats.module.css"; // plasmic-import: tDcLAAzBYxMBQFp3GHSHfW/projectcss
import * as sty from "./PlasmicStoreCard.module.css"; // plasmic-import: 8u0cQjf0oM/css

export type PlasmicStoreCard__VariantMembers = {};

export type PlasmicStoreCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicStoreCard__VariantsArgs;
export const PlasmicStoreCard__VariantProps = new Array<VariantPropType>();

export type PlasmicStoreCard__ArgsType = {};
type ArgPropType = keyof PlasmicStoreCard__ArgsType;
export const PlasmicStoreCard__ArgProps = new Array<ArgPropType>();

export type PlasmicStoreCard__OverridesType = {
  root?: p.Flex<typeof StoreCard>;
};

export interface DefaultStoreCardProps {
  className?: string;
}

function PlasmicStoreCard__RenderFunc(props: {
  variants: PlasmicStoreCard__VariantsArgs;
  args: PlasmicStoreCard__ArgsType;
  overrides: PlasmicStoreCard__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <StoreCard
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof StoreCard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStoreCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicStoreCard__VariantsArgs;
  args?: PlasmicStoreCard__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicStoreCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicStoreCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicStoreCard__ArgProps,
      internalVariantPropNames: PlasmicStoreCard__VariantProps
    });

    return PlasmicStoreCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStoreCard";
  } else {
    func.displayName = `PlasmicStoreCard.${nodeName}`;
  }
  return func;
}

export const PlasmicStoreCard = Object.assign(
  // Top-level PlasmicStoreCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicStoreCard
    internalVariantProps: PlasmicStoreCard__VariantProps,
    internalArgProps: PlasmicStoreCard__ArgProps
  }
);

export default PlasmicStoreCard;
/* prettier-ignore-end */
