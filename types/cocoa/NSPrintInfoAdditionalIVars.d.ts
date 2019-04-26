/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintInfoAdditionalIVars<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSPrintInfoAdditionalIVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPrintInfoAdditionalIVars>(): R;
      new: <R = NSPrintInfoAdditionalIVars>() => R;
    }
  }
}

declare const NSPrintInfoAdditionalIVars: cocoa.NSPrintInfoAdditionalIVars.CLASS;
