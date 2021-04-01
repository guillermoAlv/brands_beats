// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDcLAAzBYxMBQFp3GHSHfW
// Component: HRdMwGZiPCe
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
import LogoText from "../../LogoText"; // plasmic-import: YZ5pqHoeK_/component
import HeaderSearchBar from "../../HeaderSearchBar"; // plasmic-import: RynG-Hop7u/component
import HeaderButton from "../../HeaderButton"; // plasmic-import: QjUfVEq5Go/component
import HeaderMenuButton from "../../HeaderMenuButton"; // plasmic-import: kpJaxtJ4t1/component
import Footer from "../../Footer"; // plasmic-import: rMsFEqx2mQ/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 5Lc4h9nwB5Z/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_brands_beats.module.css"; // plasmic-import: tDcLAAzBYxMBQFp3GHSHfW/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: HRdMwGZiPCe/css

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {
  children?: React.ReactNode;
  children2?: React.ReactNode;
  searchResults?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>(
  "children",
  "children2",
  "searchResults"
);

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"header">;
  logoText?: p.Flex<typeof LogoText>;
  headerButtonAreaBig?: p.Flex<"div">;
  headerButtonAreaMobile?: p.Flex<"div">;
  headerMenuButton?: p.Flex<typeof HeaderMenuButton>;
  hero?: p.Flex<"div">;
  searchResults?: p.Flex<"div">;
};

export interface DefaultHomepageProps {
  children?: React.ReactNode;
  children2?: React.ReactNode;
  searchResults?: React.ReactNode;
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.box__mGzf)}>
            <header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames(defaultcss.all, sty.header)}
            >
              <LogoText
                data-plasmic-name={"logoText"}
                data-plasmic-override={overrides.logoText}
                className={classNames("__wab_instance", sty.logoText)}
              />

              <div className={classNames(defaultcss.all, sty.box__p9Jof)}>
                <HeaderSearchBar
                  className={classNames(
                    "__wab_instance",
                    sty.headerSearchBar__ew6R7
                  )}
                />
              </div>

              {(
                hasVariant(globalVariants, "screen", "bigScreensOnly")
                  ? true
                  : false
              ) ? (
                <div
                  data-plasmic-name={"headerButtonAreaBig"}
                  data-plasmic-override={overrides.headerButtonAreaBig}
                  className={classNames(
                    defaultcss.all,
                    sty.headerButtonAreaBig
                  )}
                >
                  {(
                    hasVariant(globalVariants, "screen", "bigScreensOnly")
                      ? true
                      : true
                  ) ? (
                    <p.PlasmicSlot
                      defaultContents={
                        <React.Fragment>
                          <HeaderButton
                            className={classNames(
                              "__wab_instance",
                              sty.headerButton__wHet7
                            )}
                          >
                            {"Contacto"}
                          </HeaderButton>

                          <HeaderButton
                            className={classNames(
                              "__wab_instance",
                              sty.headerButton__bqcWx
                            )}
                          >
                            {"FAQ"}
                          </HeaderButton>

                          <HeaderButton
                            className={classNames(
                              "__wab_instance",
                              sty.headerButton__ohi4J
                            )}
                          >
                            <div
                              className={classNames(
                                defaultcss.all,
                                defaultcss.__wab_text,
                                sty.box__rn7Cy
                              )}
                            >
                              {"Button text"}
                            </div>
                          </HeaderButton>

                          <HeaderButton
                            className={classNames(
                              "__wab_instance",
                              sty.headerButton___4MMqb
                            )}
                          >
                            {"Sobre nosotros"}
                          </HeaderButton>

                          <HeaderButton
                            className={classNames(
                              "__wab_instance",
                              sty.headerButton__lvel7
                            )}
                          >
                            {"Suscribete"}
                          </HeaderButton>
                        </React.Fragment>
                      }
                      value={args.children}
                    />
                  ) : null}
                </div>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "bigScreensOnly")
                  ? false
                  : true
              ) ? (
                <div
                  data-plasmic-name={"headerButtonAreaMobile"}
                  data-plasmic-override={overrides.headerButtonAreaMobile}
                  className={classNames(
                    defaultcss.all,
                    sty.headerButtonAreaMobile
                  )}
                >
                  <p.PlasmicSlot
                    defaultContents={
                      <HeaderMenuButton
                        data-plasmic-name={"headerMenuButton"}
                        data-plasmic-override={overrides.headerMenuButton}
                        className={classNames(
                          "__wab_instance",
                          sty.headerMenuButton
                        )}
                      />
                    }
                    value={args.children2}
                  />
                </div>
              ) : null}
            </header>

            <div
              data-plasmic-name={"hero"}
              data-plasmic-override={overrides.hero}
              className={classNames(defaultcss.all, sty.hero)}
            >
              <div className={classNames(defaultcss.all, sty.box___8Lbi8)}>
                <div className={classNames(defaultcss.all, sty.box__uV2Q)}>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___6SnVt
                    )}
                  >
                    {"Brands Beats"}
                  </div>
                </div>

                <div className={classNames(defaultcss.all, sty.box__z4M5P)}>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__op1G3
                    )}
                  >
                    {"Todos los ecommerce independientes de España y Portugal"}
                  </div>
                </div>

                <div className={classNames(defaultcss.all, sty.box__xZlnI)}>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__jjTvU
                    )}
                  >
                    {"Encuentra las marcas que cambian el mundo"}
                  </div>
                </div>

                {(
                  hasVariant(globalVariants, "screen", "bigScreensOnly")
                    ? true
                    : false
                ) ? (
                  <div className={classNames(defaultcss.all, sty.box___677Hf)}>
                    <HeaderSearchBar
                      className={classNames(
                        "__wab_instance",
                        sty.headerSearchBar__b1Cz
                      )}
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div
              data-plasmic-name={"searchResults"}
              data-plasmic-override={overrides.searchResults}
              className={classNames(defaultcss.all, sty.searchResults)}
            >
              <p.PlasmicSlot
                defaultContents={null}
                value={args.searchResults}
              />
            </div>

            <footer className={classNames(defaultcss.all, sty.footer___6YfxI)}>
              <Footer
                className={classNames("__wab_instance", sty.footer___5BWbc)}
              />
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "logoText",
    "headerButtonAreaBig",
    "headerButtonAreaMobile",
    "headerMenuButton",
    "hero",
    "searchResults"
  ],
  header: [
    "header",
    "logoText",
    "headerButtonAreaBig",
    "headerButtonAreaMobile",
    "headerMenuButton"
  ],
  logoText: ["logoText"],
  headerButtonAreaBig: ["headerButtonAreaBig"],
  headerButtonAreaMobile: ["headerButtonAreaMobile", "headerMenuButton"],
  headerMenuButton: ["headerMenuButton"],
  hero: ["hero"],
  searchResults: ["searchResults"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "header";
  logoText: typeof LogoText;
  headerButtonAreaBig: "div";
  headerButtonAreaMobile: "div";
  headerMenuButton: typeof HeaderMenuButton;
  hero: "div";
  searchResults: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHomepage__VariantsArgs;
  args?: PlasmicHomepage__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    logoText: makeNodeComponent("logoText"),
    headerButtonAreaBig: makeNodeComponent("headerButtonAreaBig"),
    headerButtonAreaMobile: makeNodeComponent("headerButtonAreaMobile"),
    headerMenuButton: makeNodeComponent("headerMenuButton"),
    hero: makeNodeComponent("hero"),
    searchResults: makeNodeComponent("searchResults"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */