/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSpecialLayerViewController<T0 = void, T1 = void, T2 = void> extends MSNestedInspectorSection, MSSymbolInstanceSectionDelegateProtocol, NSMenuDelegateProtocol {
    regularLayerInspectorSections<R = unknown>(): R;
    externalLayerInspectorSections<R = unknown>(): R;
    inspectorsWithProperContent<R = unknown>(): R;
    layerOrContentsOfLayer_ifKindOfClass<R = unknown, P0 = unknown, P1 = unknown>(_layerOrContentsOfLayer: P0, _ifKindOfClass: P1): R;
    sectionInterfaceCache<R = NSCache>(): R;
    setSectionInterfaceCache<R = void, P0 = NSCache>(_v: P0): R;
    layerInspectorSections<R = NSArray>(): R;
    setLayerInspectorSections<R = void, P0 = NSArray>(_v: P0): R;
    symbolInstanceSection<R = MSSymbolInstanceSection>(): R;
    setSymbolInstanceSection<R = void, P0 = MSSymbolInstanceSection>(_v: P0): R;
    textSection<R = MSBaseInspectorSection>(): R;
    setTextSection<R = void, P0 = MSBaseInspectorSection>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSpecialLayerViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSNestedInspectorSection, MSSymbolInstanceSectionDelegateProtocol, NSMenuDelegateProtocol {
      alloc<R = MSSpecialLayerViewController>(): R;
      new: <R = MSSpecialLayerViewController>() => R;
      sectionOrder<R = unknown>(): R;
    }
  }
}

declare const MSSpecialLayerViewController: cocoa.MSSpecialLayerViewController.CLASS;
