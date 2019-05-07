/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTransitionController<T0 = void, T1 = void, T2 = void> extends NSObject {
    contentWindowID<R = number>(): R;
    contentController<R = unknown>(): R;
    suppressImplicitFullScreenForOtherWindows<R = boolean>(): R;
    complete<R = void>(): R;
    interrupt<R = void>(): R;
    start<R = void>(): R;
    dealloc<R = void>(): R;
    space<R = _NSFullScreenSpace>(): R;
    setSpace<R = void, P0 = _NSFullScreenSpace>(_v: P0): R;
  }
  namespace _NSFullScreenTransitionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSFullScreenTransitionController>(): R;
      new: <R = _NSFullScreenTransitionController>() => R;
      flippedCGRectFromNSRect<R = CGRect, P0 = CGRect>(_flippedCGRectFromNSRect: P0): R;
      clearWindowTag_onWindowNumbers<R = void, P0 = number, P1 = unknown>(_clearWindowTag: P0, _onWindowNumbers: P1): R;
      setWindowTag_onWindowNumbers<R = void, P0 = number, P1 = unknown>(_setWindowTag: P0, _onWindowNumbers: P1): R;
    }
  }
}
