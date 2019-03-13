/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBlurNameInspectorItem<T = any> extends MSStylePartInspectorItem {
    blurEnabledAction<R = void, P0 = unknown>(_blurEnabledAction: P0): R;
    enabledButton<R = NSButton>(): R;
    setEnabledButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSBlurNameInspectorItem<T = any> extends MSStylePartInspectorItem {
      alloc<R = MSBlurNameInspectorItem>(): R;
      new: <R = MSBlurNameInspectorItem>() => R;
    }
  }
}

declare const MSBlurNameInspectorItem: cocoa.classes.MSBlurNameInspectorItem;