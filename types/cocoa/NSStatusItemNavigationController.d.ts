/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStatusItemNavigationController<T0 = void, T1 = void, T2 = void> extends NSObject {
    isNavigating<R = boolean>(): R;
    endNavigation<R = void>(): R;
    navigateRight<R = void>(): R;
    navigateLeft<R = void>(): R;
    menuKeyNavigateRight<R = void>(): R;
    menuKeyNavigateLeft<R = void>(): R;
    navigationOptions<R = number>(): R;
    navigationChangedWithOptions<R = void, P0 = number>(_navigationChangedWithOptions: P0): R;
    invalidate<R = void>(): R;
    handleCtrlF8<R = void>(): R;
    _cleanupKeyThief<R = void>(): R;
    _trackKeyboardNavigation<R = boolean>(): R;
    initWithStatusItem<R = unknown, P0 = unknown>(_initWithStatusItem: P0): R;
    dealloc<R = void>(): R;
  }
  namespace NSStatusItemNavigationController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSStatusItemNavigationController>(): R;
      new: <R = NSStatusItemNavigationController>() => R;
    }
  }
}

declare const NSStatusItemNavigationController: cocoa.NSStatusItemNavigationController.CLASS;
