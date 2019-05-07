/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSplitViewShadowView<T0 = void, T1 = void, T2 = void> extends NSView {
    getShadowImage<R = unknown>(): R;
    isOpaque<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    shadowEdge<R = number>(): R;
    setShadowEdge<R = void, P0 = number>(_v: P0): R;
    shadowRevealAmount<R = number>(): R;
    setShadowRevealAmount<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSSplitViewShadowView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSSplitViewShadowView>(): R;
      new: <R = _NSSplitViewShadowView>() => R;
    }
  }
}
