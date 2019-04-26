/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface HINSMenuItemProxy<T0 = void, T1 = void, T2 = void> extends NSObject, NSValidatedUserInterfaceItemProtocol {
    initWithAction<R = unknown, P0 = string>(_initWithAction: P0): R;
    tag<R = number>(): R;
    action<R = string>(): R;
  }
  namespace HINSMenuItemProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSValidatedUserInterfaceItemProtocol {
      alloc<R = HINSMenuItemProxy>(): R;
      new: <R = HINSMenuItemProxy>() => R;
    }
  }
}

declare const HINSMenuItemProxy: cocoa.HINSMenuItemProxy.CLASS;
