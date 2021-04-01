// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDcLAAzBYxMBQFp3GHSHfW
// Component: FdipXGYvaj
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
import SearchCard from "../../SearchCard"; // plasmic-import: Px_8qz3kVB/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_brands_beats.module.css"; // plasmic-import: tDcLAAzBYxMBQFp3GHSHfW/projectcss
import * as sty from "./PlasmicSearchCard.module.css"; // plasmic-import: FdipXGYvaj/css

export type PlasmicSearchCard__VariantMembers = {};

export type PlasmicSearchCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicSearchCard__VariantsArgs;
export const PlasmicSearchCard__VariantProps = new Array<VariantPropType>();

export type PlasmicSearchCard__ArgsType = {};
type ArgPropType = keyof PlasmicSearchCard__ArgsType;
export const PlasmicSearchCard__ArgProps = new Array<ArgPropType>();

export type PlasmicSearchCard__OverridesType = {
  root?: p.Flex<typeof SearchCard>;
};

export interface DefaultSearchCardProps {
  className?: string;
}

function PlasmicSearchCard__RenderFunc(props: {
  variants: PlasmicSearchCard__VariantsArgs;
  args: PlasmicSearchCard__ArgsType;
  overrides: PlasmicSearchCard__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <SearchCard
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
  root: typeof SearchCard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSearchCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicSearchCard__VariantsArgs;
  args?: PlasmicSearchCard__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicSearchCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicSearchCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSearchCard__ArgProps,
      internalVariantPropNames: PlasmicSearchCard__VariantProps
    });

    return PlasmicSearchCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearchCard";
  } else {
    func.displayName = `PlasmicSearchCard.${nodeName}`;
  }
  return func;
}

export const PlasmicSearchCard = Object.assign(
  // Top-level PlasmicSearchCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSearchCard
    internalVariantProps: PlasmicSearchCard__VariantProps,
    internalArgProps: PlasmicSearchCard__ArgProps
  }
);

export default PlasmicSearchCard;
/* prettier-ignore-end */
