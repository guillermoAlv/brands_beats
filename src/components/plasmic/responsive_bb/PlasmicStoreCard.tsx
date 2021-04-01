// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBcw9dcxKyU36yfsUviVdG
// Component: POlLgbVSFD
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
import * as sty from "./PlasmicStoreCard.module.css"; // plasmic-import: POlLgbVSFD/css

export type PlasmicStoreCard__VariantMembers = {};

export type PlasmicStoreCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicStoreCard__VariantsArgs;
export const PlasmicStoreCard__VariantProps = new Array<VariantPropType>();

export type PlasmicStoreCard__ArgsType = {
  brandName?: React.ReactNode;
  storeCardImageCont?: React.ReactNode;
};

type ArgPropType = keyof PlasmicStoreCard__ArgsType;
export const PlasmicStoreCard__ArgProps = new Array<ArgPropType>(
  "brandName",
  "storeCardImageCont"
);

export type PlasmicStoreCard__OverridesType = {
  root?: p.Flex<"div">;
  storeCardImageCont?: p.Flex<"div">;
  img?: p.Flex<"img">;
  storeCardStoreNameCont?: p.Flex<"div">;
  storeCardTagsCont?: p.Flex<"div">;
};

export interface DefaultStoreCardProps {
  brandName?: React.ReactNode;
  storeCardImageCont?: React.ReactNode;
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"storeCardImageCont"}
        data-plasmic-override={overrides.storeCardImageCont}
        className={classNames(defaultcss.all, sty.storeCardImageCont)}
      >
        <p.PlasmicSlot
          defaultContents={
            <img
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(defaultcss.img, sty.img)}
              role={"img"}
              src={
                "https://www.wrsoluciones.es/d2cbrands/capitandenim.com.png" as const
              }
            />
          }
          value={args.storeCardImageCont}
        />
      </div>

      <div
        data-plasmic-name={"storeCardStoreNameCont"}
        data-plasmic-override={overrides.storeCardStoreNameCont}
        className={classNames(defaultcss.all, sty.storeCardStoreNameCont)}
      >
        <p.PlasmicSlot defaultContents={"Brand Name"} value={args.brandName} />
      </div>

      <div
        data-plasmic-name={"storeCardTagsCont"}
        data-plasmic-override={overrides.storeCardTagsCont}
        className={classNames(defaultcss.all, sty.storeCardTagsCont)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "storeCardImageCont",
    "img",
    "storeCardStoreNameCont",
    "storeCardTagsCont"
  ],
  storeCardImageCont: ["storeCardImageCont", "img"],
  img: ["img"],
  storeCardStoreNameCont: ["storeCardStoreNameCont"],
  storeCardTagsCont: ["storeCardTagsCont"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  storeCardImageCont: "div";
  img: "img";
  storeCardStoreNameCont: "div";
  storeCardTagsCont: "div";
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
    storeCardImageCont: makeNodeComponent("storeCardImageCont"),
    img: makeNodeComponent("img"),
    storeCardStoreNameCont: makeNodeComponent("storeCardStoreNameCont"),
    storeCardTagsCont: makeNodeComponent("storeCardTagsCont"),

    // Metadata about props expected for PlasmicStoreCard
    internalVariantProps: PlasmicStoreCard__VariantProps,
    internalArgProps: PlasmicStoreCard__ArgProps
  }
);

export default PlasmicStoreCard;
/* prettier-ignore-end */
