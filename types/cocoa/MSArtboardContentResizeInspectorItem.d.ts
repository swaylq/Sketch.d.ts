/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardContentResizeInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {}
  namespace MSArtboardContentResizeInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSArtboardContentResizeInspectorItem>(): R;
      new: <R = MSArtboardContentResizeInspectorItem>() => R;
    }
  }
}

declare const MSArtboardContentResizeInspectorItem: cocoa.MSArtboardContentResizeInspectorItem.CLASS;
