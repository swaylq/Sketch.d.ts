/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableTabDraggingInfo<T0 = void, T1 = void, T2 = void> extends NSObject, NSTabDraggingInfoProtocol {
    draggingItem<R = NSTabBarItem>(): R;
    setDraggingItem<R = void, P0 = NSTabBarItem>(_v: P0): R;
  }
  namespace NSMutableTabDraggingInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTabDraggingInfoProtocol {
      alloc<R = NSMutableTabDraggingInfo>(): R;
      new: <R = NSMutableTabDraggingInfo>() => R;
    }
  }
}

declare const NSMutableTabDraggingInfo: cocoa.NSMutableTabDraggingInfo.CLASS;
