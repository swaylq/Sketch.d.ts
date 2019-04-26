/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomBlurInspectorItem<T0 = void, T1 = void, T2 = void> extends MSBaseBlurInspectorItem {
    editZoomCenter<R = void, P0 = unknown>(_editZoomCenter: P0): R;
    handlerFocusDidChange<R = void, P0 = unknown>(_handlerFocusDidChange: P0): R;
    editOriginButton<R = NSButton>(): R;
    setEditOriginButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace MSZoomBlurInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseBlurInspectorItem {
      alloc<R = MSZoomBlurInspectorItem>(): R;
      new: <R = MSZoomBlurInspectorItem>() => R;
    }
  }
}

declare const MSZoomBlurInspectorItem: cocoa.MSZoomBlurInspectorItem.CLASS;
