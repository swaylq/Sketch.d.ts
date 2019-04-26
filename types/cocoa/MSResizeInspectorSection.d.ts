/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResizeInspectorSection<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection {
    resizeItem<R = MSResizeInspectorItem>(): R;
    setResizeItem<R = void, P0 = MSResizeInspectorItem>(_v: P0): R;
    resizeHeader<R = MSCollapsibleHeaderInspectorItem>(): R;
    setResizeHeader<R = void, P0 = MSCollapsibleHeaderInspectorItem>(_v: P0): R;
  }
  namespace MSResizeInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection {
      alloc<R = MSResizeInspectorSection>(): R;
      new: <R = MSResizeInspectorSection>() => R;
    }
  }
}

declare const MSResizeInspectorSection: cocoa.MSResizeInspectorSection.CLASS;
