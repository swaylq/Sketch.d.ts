/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorToolbarItemView<T0 = void, T1 = void, T2 = void> extends NSView {
    controls<R = NSArray>(): R;
  }
  namespace MSMirrorToolbarItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSMirrorToolbarItemView>(): R;
      new: <R = MSMirrorToolbarItemView>() => R;
    }
  }
}

declare const MSMirrorToolbarItemView: cocoa.MSMirrorToolbarItemView.CLASS;
