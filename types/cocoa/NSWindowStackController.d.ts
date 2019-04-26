/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowStackController<T0 = void, T1 = void, T2 = void> extends NSWindowTabGroup, NSTabBarDelegateProtocol, NSTabPickerDelegateProtocol {}
  namespace NSWindowStackController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowTabGroup, NSTabBarDelegateProtocol, NSTabPickerDelegateProtocol {
      alloc<R = NSWindowStackController>(): R;
      new: <R = NSWindowStackController>() => R;
      enableTabBar<R = void>(): R;
    }
  }
}

declare const NSWindowStackController: cocoa.NSWindowStackController.CLASS;
