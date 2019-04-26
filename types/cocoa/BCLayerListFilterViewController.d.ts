/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCLayerListFilterViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSMenuDelegateProtocol, NSSearchFieldDelegateProtocol, NSTextViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    refreshFilterTokens<R = void>(): R;
    dropLastFilterToken<R = void>(): R;
    refreshAfterFilterChange<R = void>(): R;
    turnOffSelectedFilterTokens<R = void>(): R;
    refreshLayerList<R = void>(): R;
    filterTokenButtonClicked<R = void, P0 = unknown>(_filterTokenButtonClicked: P0): R;
    clearFilterStringAndTokens<R = void, P0 = unknown>(_clearFilterStringAndTokens: P0): R;
    toggleFilter<R = void, P0 = unknown>(_toggleFilter: P0): R;
    showFilterMenu<R = void, P0 = unknown>(_showFilterMenu: P0): R;
    findLayer<R = void, P0 = unknown>(_findLayer: P0): R;
    tokenButtonWithTitle_filterType<R = unknown, P0 = unknown, P1 = number>(_tokenButtonWithTitle: P0, _filterType: P1): R;
    showClearButtonIfAppropriate<R = void>(): R;
    selectedFilterTokenButtons<R = unknown>(): R;
    filterTokenButtons<R = unknown>(): R;
    sidebar<R = unknown>(): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    control_textView_doCommandBySelector<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_control: P0, _textView: P1, _doCommandBySelector: P2): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    control_textShouldEndEditing<R = boolean, P0 = unknown, P1 = unknown>(_control: P0, _textShouldEndEditing: P1): R;
    searchFieldSelectionChanged<R = void, P0 = unknown>(_searchFieldSelectionChanged: P0): R;
    control_textShouldBeginEditing<R = boolean, P0 = unknown, P1 = unknown>(_control: P0, _textShouldBeginEditing: P1): R;
    stopObservingFilterTextSelection<R = void, P0 = unknown>(_stopObservingFilterTextSelection: P0): R;
    observeFilterTextSelection<R = void, P0 = unknown>(_observeFilterTextSelection: P0): R;
    editFilterString<R = void>(): R;
    applyAppearance<R = void>(): R;
    namedImageOwners<R = NSMutableDictionary>(): R;
    setNamedImageOwners<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    filterTokensView<R = NSView>(): R;
    setFilterTokensView<R = void, P0 = NSView>(_v: P0): R;
    filterStringTextField<R = NSSearchField>(): R;
    setFilterStringTextField<R = void, P0 = NSSearchField>(_v: P0): R;
    filterMenuItemTemplateImages<R = NSDictionary>(): R;
    setFilterMenuItemTemplateImages<R = void, P0 = NSDictionary>(_v: P0): R;
    filterPickerMenu<R = NSMenu>(): R;
    setFilterPickerMenu<R = void, P0 = NSMenu>(_v: P0): R;
    filterButton<R = NSButton>(): R;
    setFilterButton<R = void, P0 = NSButton>(_v: P0): R;
    designedClearButtonWidth<R = number>(): R;
    setDesignedClearButtonWidth<R = void, P0 = number>(_v: P0): R;
    clearButton<R = NSButton>(): R;
    setClearButton<R = void, P0 = NSButton>(_v: P0): R;
    filter<R = BCFilterInfo>(): R;
    setFilter<R = void, P0 = BCFilterInfo>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCLayerListFilterViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSMenuDelegateProtocol, NSSearchFieldDelegateProtocol, NSTextViewDelegateProtocol {
      alloc<R = BCLayerListFilterViewController>(): R;
      new: <R = BCLayerListFilterViewController>() => R;
    }
  }
}

declare const BCLayerListFilterViewController: cocoa.BCLayerListFilterViewController.CLASS;
