/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBaseTabData<T0 = void, T1 = void, T2 = void> extends NSObject {
    tabBarItem<R = NSTabBarItem>(): R;
    setTabBarItem<R = void, P0 = NSTabBarItem>(_v: P0): R;
  }
  namespace NSBaseTabData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSBaseTabData>(): R;
      new: <R = NSBaseTabData>() => R;
    }
  }
}

declare const NSBaseTabData: cocoa.NSBaseTabData.CLASS;
