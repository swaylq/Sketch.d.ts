/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesRolloverView<T0 = void, T1 = void, T2 = void> extends NSView {
    initWithDelegate_style<R = unknown, P0 = unknown, P1 = number>(_initWithDelegate: P0, _style: P1): R;
    isFlipped<R = boolean>(): R;
    delegate<R = NSServicesRolloverViewDelegate>(): R;
    setDelegate<R = void, P0 = NSServicesRolloverViewDelegate>(_v: P0): R;
  }
  namespace NSServicesRolloverView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSServicesRolloverView>(): R;
      new: <R = NSServicesRolloverView>() => R;
    }
  }
}

declare const NSServicesRolloverView: cocoa.NSServicesRolloverView.CLASS;
