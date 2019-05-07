/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBlurNameInspectorItem<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorItem {
    blurEnabledAction<R = void, P0 = unknown>(_blurEnabledAction: P0): R;
    enabledButton<R = NSButton>(): R;
    setEnabledButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace MSBlurNameInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorItem {
      alloc<R = MSBlurNameInspectorItem>(): R;
      new: <R = MSBlurNameInspectorItem>() => R;
    }
  }
}

declare const MSBlurNameInspectorItem: cocoa.MSBlurNameInspectorItem.CLASS;
