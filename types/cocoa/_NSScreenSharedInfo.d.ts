/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScreenSharedInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    _finishUpdating<R = void>(): R;
    _copyForUpdating<R = unknown>(): R;
    _setSystemUIOptions<R = void, P0 = number>(__setSystemUIOptions: P0): R;
    _setSystemUIMode<R = void, P0 = number>(__setSystemUIMode: P0): R;
    _setMenuBarHeight<R = void, P0 = number>(__setMenuBarHeight: P0): R;
    _setUniqueDisplays<R = void, P0 = unknown>(__setUniqueDisplays: P0): R;
    _initForUpdating<R = unknown>(): R;
    systemUIOptions<R = number>(): R;
    systemUIMode<R = number>(): R;
    menuBarHeight<R = number>(): R;
    uniqueDisplays<R = NSArray>(): R;
    dockOrientation<R = number>(): R;
    dockRect<R = CGRect>(): R;
    dockIsHidden<R = boolean>(): R;
    _dock<R = NSCGSDock>(): R;
    set_dock<R = void, P0 = NSCGSDock>(_v: P0): R;
  }
  namespace _NSScreenSharedInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSScreenSharedInfo>(): R;
      new: <R = _NSScreenSharedInfo>() => R;
    }
  }
}
