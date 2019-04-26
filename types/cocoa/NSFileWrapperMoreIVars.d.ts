/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileWrapperMoreIVars<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSFileWrapperMoreIVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFileWrapperMoreIVars>(): R;
      new: <R = NSFileWrapperMoreIVars>() => R;
    }
  }
}

declare const NSFileWrapperMoreIVars: cocoa.NSFileWrapperMoreIVars.CLASS;
