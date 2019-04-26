/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackingAreaReservedIVars<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace NSTrackingAreaReservedIVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTrackingAreaReservedIVars>(): R;
      new: <R = NSTrackingAreaReservedIVars>() => R;
    }
  }
}

declare const NSTrackingAreaReservedIVars: cocoa.NSTrackingAreaReservedIVars.CLASS;
