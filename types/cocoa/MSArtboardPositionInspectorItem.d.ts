/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPositionInspectorItem<T0 = void, T1 = void, T2 = void> extends MSPositionInspectorItem {
    sizeToFitButton<R = NSButton>(): R;
    setSizeToFitButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace MSArtboardPositionInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPositionInspectorItem {
      alloc<R = MSArtboardPositionInspectorItem>(): R;
      new: <R = MSArtboardPositionInspectorItem>() => R;
    }
  }
}

declare const MSArtboardPositionInspectorItem: cocoa.MSArtboardPositionInspectorItem.CLASS;
