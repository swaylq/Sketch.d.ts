/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowItem<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSFunctionRowItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFunctionRowItem>(): R;
      new: <R = NSFunctionRowItem>() => R;
    }
  }
}

declare const NSFunctionRowItem: cocoa.NSFunctionRowItem.CLASS;
