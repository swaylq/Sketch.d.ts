/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseInspectorSection<T0 = void, T1 = void, T2 = void> extends NSViewController, MSInspectorSectionProtocol, MSInspectorItemDelegateProtocol {
    cxx_destruct<R = void>(): R;
    refreshIfNecessary<R = void, P0 = unknown>(_refreshIfNecessary: P0): R;
    separatorInset<R = NSEdgeInsets>(): R;
    assignItemLayers<R = void>(): R;
    updateItems<R = void>(): R;
    changeTextLayerFont<R = void, P0 = unknown>(_changeTextLayerFont: P0): R;
    items<R = NSArray>(): R;
    setItems<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = MSInspectorSectionDelegate>(): R;
    setDelegate<R = void, P0 = MSInspectorSectionDelegate>(_v: P0): R;
    valuesPossiblyDirty<R = boolean>(): R;
    setValuesPossiblyDirty<R = void, P0 = boolean>(_v: P0): R;
    layers<R = MSLayerArray>(): R;
    setLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
    selectionContainsChildrenOfCompoundPath<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSBaseInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSInspectorSectionProtocol, MSInspectorItemDelegateProtocol {
      alloc<R = MSBaseInspectorSection>(): R;
      new: <R = MSBaseInspectorSection>() => R;
    }
  }
}

declare const MSBaseInspectorSection: cocoa.MSBaseInspectorSection.CLASS;
