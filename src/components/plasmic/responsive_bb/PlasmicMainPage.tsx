// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBcw9dcxKyU36yfsUviVdG
// Component: CZsdhsQfR2
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

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: E1isZEegCA11/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_responsive_bb.module.css"; // plasmic-import: wBcw9dcxKyU36yfsUviVdG/projectcss
import * as sty from "./PlasmicMainPage.module.css"; // plasmic-import: CZsdhsQfR2/css

export type PlasmicMainPage__VariantMembers = {};

export type PlasmicMainPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicMainPage__VariantsArgs;
export const PlasmicMainPage__VariantProps = new Array<VariantPropType>();

export type PlasmicMainPage__ArgsType = {
  storesResults?: React.ReactNode;
  heroRowSearchbox?: React.ReactNode;
  searchSlider?: React.ReactNode;
};

type ArgPropType = keyof PlasmicMainPage__ArgsType;
export const PlasmicMainPage__ArgProps = new Array<ArgPropType>(
  "storesResults",
  "heroRowSearchbox",
  "searchSlider"
);

export type PlasmicMainPage__OverridesType = {
  root?: p.Flex<"div">;
  heroRow?: p.Flex<"div">;
  navRow?: p.Flex<"div">;
  storesRow?: p.Flex<"div">;
  footerRow?: p.Flex<"div">;
};

export interface DefaultMainPageProps {
  storesResults?: React.ReactNode;
  heroRowSearchbox?: React.ReactNode;
  searchSlider?: React.ReactNode;
  className?: string;
}

function PlasmicMainPage__RenderFunc(props: {
  variants: PlasmicMainPage__VariantsArgs;
  args: PlasmicMainPage__ArgsType;
  overrides: PlasmicMainPage__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__mkTi7)}>
        <div
          data-plasmic-name={"heroRow"}
          data-plasmic-override={overrides.heroRow}
          className={classNames(defaultcss.all, sty.heroRow)}
        >
          <div className={classNames(defaultcss.all, sty.box__wxYiO)}>
            <div className={classNames(defaultcss.all, sty.box__yhpMl)}>
              <div className={classNames(defaultcss.all, sty.box__zwHHh)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__uWCb8
                  )}
                >
                  {"Brands Beats"}
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.box__ftse8)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__qNHt
                  )}
                >
                  {"Todos los ecommerce independientes de España y Portugal"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__agl9X
                  )}
                >
                  {"Encuentra las marcas que cambian el mundo"}
                </div>
              </div>

              {(
                hasVariant(globalVariants, "screen", "mobile") ? false : true
              ) ? (
                <div className={classNames(defaultcss.all, sty.box__qb4W9)}>
                  <div className={classNames(defaultcss.all, sty.box__j8AK)}>
                    <p.PlasmicSlot
                      defaultContents={null}
                      value={args.heroRowSearchbox}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {false ? (
          <div
            data-plasmic-name={"navRow"}
            data-plasmic-override={overrides.navRow}
            className={classNames(defaultcss.all, sty.navRow)}
          >
            <p.PlasmicSlot defaultContents={null} value={args.searchSlider} />
          </div>
        ) : null}

        <div
          data-plasmic-name={"storesRow"}
          data-plasmic-override={overrides.storesRow}
          className={classNames(defaultcss.all, sty.storesRow)}
        >
          <p.PlasmicSlot defaultContents={null} value={args.storesResults} />
        </div>

        <div
          data-plasmic-name={"footerRow"}
          data-plasmic-override={overrides.footerRow}
          className={classNames(defaultcss.all, sty.footerRow)}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "heroRow", "navRow", "storesRow", "footerRow"],
  heroRow: ["heroRow"],
  navRow: ["navRow"],
  storesRow: ["storesRow"],
  footerRow: ["footerRow"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  heroRow: "div";
  navRow: "div";
  storesRow: "div";
  footerRow: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMainPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicMainPage__VariantsArgs;
  args?: PlasmicMainPage__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicMainPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicMainPage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMainPage__ArgProps,
      internalVariantPropNames: PlasmicMainPage__VariantProps
    });

    return PlasmicMainPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMainPage";
  } else {
    func.displayName = `PlasmicMainPage.${nodeName}`;
  }
  return func;
}

export const PlasmicMainPage = Object.assign(
  // Top-level PlasmicMainPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    heroRow: makeNodeComponent("heroRow"),
    navRow: makeNodeComponent("navRow"),
    storesRow: makeNodeComponent("storesRow"),
    footerRow: makeNodeComponent("footerRow"),

    // Metadata about props expected for PlasmicMainPage
    internalVariantProps: PlasmicMainPage__VariantProps,
    internalArgProps: PlasmicMainPage__ArgProps
  }
);

export default PlasmicMainPage;
/* prettier-ignore-end */