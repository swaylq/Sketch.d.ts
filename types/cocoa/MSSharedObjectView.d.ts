/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectView<T0 = void, T1 = void, T2 = void> extends NSView {
    previewDirty<R = boolean>(): R;
    setPreviewDirty<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSSharedObjectView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSSharedObjectView>(): R;
      new: <R = MSSharedObjectView>() => R;
    }
  }
}

declare const MSSharedObjectView: cocoa.MSSharedObjectView.CLASS;
