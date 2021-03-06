// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDcLAAzBYxMBQFp3GHSHfW
// Component: xRmXX9TFfa
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
import * as sty from "./PlasmicContentSubscribe.module.css"; // plasmic-import: xRmXX9TFfa/css

export type PlasmicContentSubscribe__VariantMembers = {};

export type PlasmicContentSubscribe__VariantsArgs = {};
type VariantPropType = keyof PlasmicContentSubscribe__VariantsArgs;
export const PlasmicContentSubscribe__VariantProps = new Array<VariantPropType>();

export type PlasmicContentSubscribe__ArgsType = {};
type ArgPropType = keyof PlasmicContentSubscribe__ArgsType;
export const PlasmicContentSubscribe__ArgProps = new Array<ArgPropType>();

export type PlasmicContentSubscribe__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
  button?: p.Flex<"button">;
};

export interface DefaultContentSubscribeProps {
  className?: string;
}

function PlasmicContentSubscribe__RenderFunc(props: {
  variants: PlasmicContentSubscribe__VariantsArgs;
  args: PlasmicContentSubscribe__ArgsType;
  overrides: PlasmicContentSubscribe__OverridesType;
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
      <div className={classNames(defaultcss.all, sty.box__v8Plb)}>
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___6W1AY
          )}
        >
          {"Recibe nuevas marcas en tu buz??n"}
        </div>
      </div>

      <div className={classNames(defaultcss.all, sty.box___5FGgk)}>
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__x8GCr
          )}
        >
          {
            "Nuestra newsletter incluye marcas que hacen cosas curiosas, utilizan materiales novedosos o innovan en la fabricaci??n de sus productos."
          }
        </div>
      </div>

      {true ? (
        <div className={classNames(defaultcss.all, sty.box__uE5Ye)}>
          <input
            data-plasmic-name={"textbox"}
            data-plasmic-override={overrides.textbox}
            className={classNames(defaultcss.input, sty.textbox)}
            placeholder={"Some placeholder" as const}
            size={1 as const}
            type={"text" as const}
            value={"Escribe tu email" as const}
          />

          <button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames(
              defaultcss.button,
              defaultcss.__wab_text,
              sty.button
            )}
          >
            {"Suscr??bete"}
          </button>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox", "button"],
  textbox: ["textbox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContentSubscribe__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicContentSubscribe__VariantsArgs;
  args?: PlasmicContentSubscribe__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicContentSubscribe__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicContentSubscribe__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicContentSubscribe__ArgProps,
      internalVariantPropNames: PlasmicContentSubscribe__VariantProps
    });

    return PlasmicContentSubscribe__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContentSubscribe";
  } else {
    func.displayName = `PlasmicContentSubscribe.${nodeName}`;
  }
  return func;
}

export const PlasmicContentSubscribe = Object.assign(
  // Top-level PlasmicContentSubscribe renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicContentSubscribe
    internalVariantProps: PlasmicContentSubscribe__VariantProps,
    internalArgProps: PlasmicContentSubscribe__ArgProps
  }
);

export default PlasmicContentSubscribe;
/* prettier-ignore-end */
