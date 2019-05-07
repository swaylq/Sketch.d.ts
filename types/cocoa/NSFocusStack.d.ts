/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFocusStack<T0 = void, T1 = void, T2 = void> extends NSObject {
    fixInvalidatedFocusForFocusView<R = void>(): R;
    invalidateFocus<R = void, P0 = unknown>(_invalidateFocus: P0): R;
    isWindowInFocusStack<R = boolean, P0 = unknown>(_isWindowInFocusStack: P0): R;
    removeFreedWindow<R = void, P0 = unknown>(_removeFreedWindow: P0): R;
    removeFreedView<R = void, P0 = unknown>(_removeFreedView: P0): R;
    performWithFocusView_inWindow_usingBlock<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_performWithFocusView: P0, _inWindow: P1, _usingBlock: P2): R;
    popTopView<R = void>(): R;
    unfocusView<R = void, P0 = unknown>(_unfocusView: P0): R;
    focusedView<R = unknown>(): R;
    focusView_inWindow<R = void, P0 = unknown, P1 = unknown>(_focusView: P0, _inWindow: P1): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSFocusStack {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFocusStack>(): R;
      new: <R = NSFocusStack>() => R;
      currentFocusStack<R = unknown>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSFocusStack: cocoa.NSFocusStack.CLASS;
