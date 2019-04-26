/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRegularLegacyScrollerImp<T0 = void, T1 = void, T2 = void> extends NSLegacyScrollerImp {
    knobMinLength<R = number>(): R;
    trackWidth<R = number>(): R;
    controlSize<R = number>(): R;
  }
  namespace NSRegularLegacyScrollerImp {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLegacyScrollerImp {
      alloc<R = NSRegularLegacyScrollerImp>(): R;
      new: <R = NSRegularLegacyScrollerImp>() => R;
    }
  }
}

declare const NSRegularLegacyScrollerImp: cocoa.NSRegularLegacyScrollerImp.CLASS;
