/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarGroupView<T0 = void, T1 = void, T2 = void> extends NSView {
    sendAction<R = void>(): R;
    moveLeft<R = void, P0 = unknown>(_moveLeft: P0): R;
    moveRight<R = void, P0 = unknown>(_moveRight: P0): R;
    _moveInDirection<R = boolean, P0 = number>(__moveInDirection: P0): R;
    performSublayout<R = void>(): R;
    setNeedsSublayout<R = void, P0 = boolean>(_setNeedsSublayout: P0): R;
    initWithItem<R = unknown, P0 = unknown>(_initWithItem: P0): R;
  }
  namespace NSToolbarGroupView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSToolbarGroupView>(): R;
      new: <R = NSToolbarGroupView>() => R;
    }
  }
}

declare const NSToolbarGroupView: cocoa.NSToolbarGroupView.CLASS;
