/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenBackdropController<T0 = void, T1 = void, T2 = void> extends NSObject {
    removeBackgroundWindows<R = void>(): R;
    updateBackgroundWindows<R = void>(): R;
    _createBackgroundWindowOnScreen<R = unknown, P0 = unknown>(__createBackgroundWindowOnScreen: P0): R;
    backgroundWindowIDs<R = unknown>(): R;
    dealloc<R = void>(): R;
    space<R = _NSFullScreenSpace>(): R;
    setSpace<R = void, P0 = _NSFullScreenSpace>(_v: P0): R;
  }
  namespace _NSFullScreenBackdropController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSFullScreenBackdropController>(): R;
      new: <R = _NSFullScreenBackdropController>() => R;
    }
  }
}
