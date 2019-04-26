/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLineHeightFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter {}
  namespace NSLineHeightFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter {
      alloc<R = NSLineHeightFormatter>(): R;
      new: <R = NSLineHeightFormatter>() => R;
    }
  }
}

declare const NSLineHeightFormatter: cocoa.NSLineHeightFormatter.CLASS;
