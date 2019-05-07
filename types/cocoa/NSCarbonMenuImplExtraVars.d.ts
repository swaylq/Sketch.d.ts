/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCarbonMenuImplExtraVars<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace NSCarbonMenuImplExtraVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCarbonMenuImplExtraVars>(): R;
      new: <R = NSCarbonMenuImplExtraVars>() => R;
    }
  }
}

declare const NSCarbonMenuImplExtraVars: cocoa.NSCarbonMenuImplExtraVars.CLASS;
