import React from "react";
import { 
  SearchBar,
  FilterTagsView,
  FilterTagsScrollView,
  HashTagsTag,
  AcountsTag,
  PlacesTag,
  ArchitecturalStylesTag
 } from './styles';



export default class SearchModal extends React.Component {
  render() {
    return (
    <React.Fragment>
      <SearchBar></SearchBar>
      <FilterTagsView>
        <FilterTagsScrollView>
        <HashTagsTag></HashTagsTag>
        <AcountsTag></AcountsTag>
        <PlacesTag></PlacesTag>
        <ArchitecturalStylesTag></ArchitecturalStylesTag>
        </FilterTagsScrollView>
      </FilterTagsView>
    </React.Fragment>
    )
  }
};


