/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberContainerView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    centerSubviews<R = boolean>(): R;
    setCenterSubviews<R = void, P0 = boolean>(_v: P0): R;
    innerView<R = unknown>(): R;
    setInnerView<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSScrubberContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSScrubberContainerView>(): R;
      new: <R = NSScrubberContainerView>() => R;
    }
  }
}

declare const NSScrubberContainerView: cocoa.NSScrubberContainerView.CLASS;
