/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapResizeToOriginalItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    setToOriginalSizeButton<R = NSButton>(): R;
    setSetToOriginalSizeButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace MSBitmapResizeToOriginalItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSBitmapResizeToOriginalItem>(): R;
      new: <R = MSBitmapResizeToOriginalItem>() => R;
    }
  }
}

declare const MSBitmapResizeToOriginalItem: cocoa.MSBitmapResizeToOriginalItem.CLASS;
