/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorFooterViewsSection<T0 = void, T1 = void, T2 = void> extends NSObject, MSInspectorSectionProtocol {
    cxx_destruct<R = void>(): R;
    views<R = NSArray>(): R;
    setViews<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSInspectorFooterViewsSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSInspectorSectionProtocol {
      alloc<R = MSInspectorFooterViewsSection>(): R;
      new: <R = MSInspectorFooterViewsSection>() => R;
    }
  }
}

declare const MSInspectorFooterViewsSection: cocoa.MSInspectorFooterViewsSection.CLASS;
