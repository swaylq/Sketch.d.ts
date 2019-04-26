/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSliceTrimTransparencyInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {}
  namespace MSSliceTrimTransparencyInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSSliceTrimTransparencyInspectorItem>(): R;
      new: <R = MSSliceTrimTransparencyInspectorItem>() => R;
    }
  }
}

declare const MSSliceTrimTransparencyInspectorItem: cocoa.MSSliceTrimTransparencyInspectorItem.CLASS;
