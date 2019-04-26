/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOverlayScrollerImp<T0 = void, T1 = void, T2 = void> extends NSScrollerImp {
    knobEndInset<R = number>(): R;
    setExpanded<R = void, P0 = boolean>(_setExpanded: P0): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    scrollerStyle<R = number>(): R;
  }
  namespace NSOverlayScrollerImp {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrollerImp {
      alloc<R = NSOverlayScrollerImp>(): R;
      new: <R = NSOverlayScrollerImp>() => R;
    }
  }
}

declare const NSOverlayScrollerImp: cocoa.NSOverlayScrollerImp.CLASS;
