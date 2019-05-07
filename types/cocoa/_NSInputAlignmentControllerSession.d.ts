/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInputAlignmentControllerSession<T0 = void, T1 = void, T2 = void> extends NSObject {
    alignItemUsingFilter<R = unknown, P0 = unknown>(_alignItemUsingFilter: P0): R;
    setAlignmentGuidesAffectingItem<R = void, P0 = unknown>(_setAlignmentGuidesAffectingItem: P0): R;
    initWithItem_controller<R = unknown, P0 = unknown, P1 = unknown>(_initWithItem: P0, _controller: P1): R;
    dealloc<R = void>(): R;
  }
  namespace _NSInputAlignmentControllerSession {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSInputAlignmentControllerSession>(): R;
      new: <R = _NSInputAlignmentControllerSession>() => R;
    }
  }
}
