/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTabGroup<T0 = void, T1 = void, T2 = void> extends NSObject {
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSWindowTabGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSWindowTabGroup>(): R;
      new: <R = NSWindowTabGroup>() => R;
    }
  }
}

declare const NSWindowTabGroup: cocoa.NSWindowTabGroup.CLASS;
