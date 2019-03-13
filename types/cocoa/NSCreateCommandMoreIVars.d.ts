/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCreateCommandMoreIVars<T = any> extends NSObject {}
  namespace classes {
    export interface NSCreateCommandMoreIVars<T = any> extends NSObject {
      alloc<R = NSCreateCommandMoreIVars>(): R;
      new: <R = NSCreateCommandMoreIVars>() => R;
    }
  }
}

declare const NSCreateCommandMoreIVars: cocoa.classes.NSCreateCommandMoreIVars;