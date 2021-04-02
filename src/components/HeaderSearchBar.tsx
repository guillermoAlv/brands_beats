// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicHeaderSearchBar,
  DefaultHeaderSearchBarProps
} from "./plasmic/brands_beats/PlasmicHeaderSearchBar";
import algoliasearch from 'algoliasearch';
import {InstantSearch, connectSearchBox, connectAutoComplete} from 'react-instantsearch-dom';
import SearchContext from './SearchContext'

const searchClient = algoliasearch(
  'E5ACT1VI4D',
  '58c5723bb97942db9b754bf244b1da75'
);

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface HeaderSearchBarProps extends Omit<DefaultHeaderSearchBarProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultHeaderSearchBarProps altogether and have
// total control over the props for your component.
interface HeaderSearchBarProps extends DefaultHeaderSearchBarProps {}

function HeaderSearchBar(props: HeaderSearchBarProps) {
  const { status, togglePlayPause } = React.useContext(SearchContext)
  const [focus, setFocus ] = React.useState(false)
  const componentRef = React.useRef<any>(null);
  const node = React.useRef<any>();
  console.log(status)
  React.useEffect(() => {
    
    function handleClick(e:  MouseEvent): void{
      if (componentRef.current){
      if (node.current.contains(e.target) || componentRef.current.contains(e.target)) {
        return;
      }
      setFocus(!focus)
    }
    };
    console.log(handleClick)
    // add when mounted
    //document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      //document.removeEventListener("mousedown", handleClick);
    };
  });
  function Tt({ hits, currentRefinement, refine }:any){
    if(currentRefinement !== ''){
      return (
        <ul ref={componentRef} onClick={(e)=> console.log(e)}style={{zIndex:2, display:"block", top: "50px", position: "absolute", backgroundColor: "white", width: "80%", marginTop: "0px"}}>
          {hits.slice(0,5).map((hit: any) => (
              <li onClick={()=>togglePlayPause(hit.tags[0])} key={hit.objectID}>{hit.tags[0]}</li>
          ))}
          </ul>
      )}
    else{
        return null
    }
  }

  const CustomAutocomplete = connectAutoComplete(Tt);
  const SearchBox = ({ currentRefinement, isSearchStalled, refine }:any) => (
    <PlasmicHeaderSearchBar
    
    />
  );
  const CustomSearchBox = connectSearchBox(SearchBox);

  return <InstantSearch searchClient={searchClient} indexName="brands_beats"><CustomSearchBox/><CustomAutocomplete/></InstantSearch>;
}

export default HeaderSearchBar;
