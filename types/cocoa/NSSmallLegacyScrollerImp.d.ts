/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSmallLegacyScrollerImp<T0 = void, T1 = void, T2 = void> extends NSLegacyScrollerImp {
    knobMinLength<R = number>(): R;
    trackWidth<R = number>(): R;
    controlSize<R = number>(): R;
  }
  namespace NSSmallLegacyScrollerImp {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLegacyScrollerImp {
      alloc<R = NSSmallLegacyScrollerImp>(): R;
      new: <R = NSSmallLegacyScrollerImp>() => R;
    }
  }
}

declare const NSSmallLegacyScrollerImp: cocoa.NSSmallLegacyScrollerImp.CLASS;
