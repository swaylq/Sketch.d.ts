/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOverlayScrollerImp<T = any> extends cocoa.NSScrollerImp {
    knobEndInset<R = number>(): R;
    setExpanded<R = void, P0 = boolean>(_setExpanded: P0): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    scrollerStyle<R = number>(): R;
  }
  namespace classes {
    export interface NSOverlayScrollerImp<T = any> extends cocoa.classes.NSScrollerImp {
      alloc<R = NSOverlayScrollerImp>(): R;
      new: <R = NSOverlayScrollerImp>() => R;
    }
  }
}

declare const NSOverlayScrollerImp: cocoa.classes.NSOverlayScrollerImp;
