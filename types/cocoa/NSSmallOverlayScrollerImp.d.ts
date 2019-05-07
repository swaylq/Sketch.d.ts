/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSmallOverlayScrollerImp<T0 = void, T1 = void, T2 = void> extends NSOverlayScrollerImp {
    trackOverlapEndInset<R = number>(): R;
    knobMinLength<R = number>(): R;
    trackSideInset<R = number>(): R;
    trackEndInset<R = number>(): R;
    trackWidth<R = number>(): R;
    controlSize<R = number>(): R;
  }
  namespace NSSmallOverlayScrollerImp {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOverlayScrollerImp {
      alloc<R = NSSmallOverlayScrollerImp>(): R;
      new: <R = NSSmallOverlayScrollerImp>() => R;
    }
  }
}

declare const NSSmallOverlayScrollerImp: cocoa.NSSmallOverlayScrollerImp.CLASS;
