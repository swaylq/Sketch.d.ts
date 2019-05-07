/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarItem<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {}
  namespace NSTabBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSTabBarItem>(): R;
      new: <R = NSTabBarItem>() => R;
    }
  }
}

declare const NSTabBarItem: cocoa.NSTabBarItem.CLASS;
