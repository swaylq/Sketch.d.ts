/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolMasterSection<T0 = void, T1 = void, T2 = void> extends MSArtboardInspectorSection, MSInspectorTableViewManagerDelegateProtocol, MSInspectorItemProviderProtocol {
    immutableSymbolMaster<R = MSImmutableSymbolMaster>(): R;
    setImmutableSymbolMaster<R = void, P0 = MSImmutableSymbolMaster>(_v: P0): R;
    numberOfItems<R = number>(): R;
    symbolMaster<R = MSSymbolMaster>(): R;
    overrideManagementController<R = MSOverrideManagementController>(): R;
    overrideManagementContainer<R = MSTableContainerInspectorItem>(): R;
    tableViewManager<R = MSInspectorTableViewManager>(): R;
    headerItem<R = MSCollapsibleHeaderInspectorItem>(): R;
  }
  namespace MSSymbolMasterSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSArtboardInspectorSection, MSInspectorTableViewManagerDelegateProtocol, MSInspectorItemProviderProtocol {
      alloc<R = MSSymbolMasterSection>(): R;
      new: <R = MSSymbolMasterSection>() => R;
    }
  }
}

declare const MSSymbolMasterSection: cocoa.MSSymbolMasterSection.CLASS;
