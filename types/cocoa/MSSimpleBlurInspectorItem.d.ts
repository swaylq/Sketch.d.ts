/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSimpleBlurInspectorItem<T0 = void, T1 = void, T2 = void> extends MSBaseBlurInspectorItem {}
  namespace MSSimpleBlurInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseBlurInspectorItem {
      alloc<R = MSSimpleBlurInspectorItem>(): R;
      new: <R = MSSimpleBlurInspectorItem>() => R;
    }
  }
}

declare const MSSimpleBlurInspectorItem: cocoa.MSSimpleBlurInspectorItem.CLASS;
