// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import Pretest from "./Pretest"
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from "./plasmic/brands_beats/PlasmicHomepage";
import {InstantSearch, Configure, Hits } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import SearchContext from './SearchContext';


const searchClient = algoliasearch(
  'E5ACT1VI4D',
  '58c5723bb97942db9b754bf244b1da75'
);

function Hit(props: any) {
  //var cat = ""
  console.log(props['hit'])

  return <Pretest children={props['hit']['name']} slot={<img src={props['hit']['url_site_image']} alt="Girl in a jacket"></img>}></Pretest>
}

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface HomepageProps extends Omit<DefaultHomepageProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultHomepageProps altogether and have
// total control over the props for your component.
interface HomepageProps extends DefaultHomepageProps {
}

function Homepage(props: HomepageProps) {
  //const { status, togglePlayPause } = React.useContext(SearchContext)
  const [status, setStatus] = React.useState('zapa');
  const togglePlayPause = (a: string) => setStatus(a);
  console.log("Hi from HomePage")
  // Use PlasmicHomepage to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicHomepage are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all HomepageProps here, but feel free
  // to do whatever works for you.
  console.log(status)
  return <SearchContext.Provider value={{status, togglePlayPause}}>
    <PlasmicHomepage 
      searchResults={
        <InstantSearch searchClient={searchClient} indexName="brands_beats">
          <Configure query={status} hitsPerPage={6}distinct/>
          <Hits hitComponent={Hit}/>
        </InstantSearch>
        } {...props} />
    </SearchContext.Provider>;
}

export default Homepage;
