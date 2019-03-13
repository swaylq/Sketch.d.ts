/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDrawerBinder<T = any> extends NSViewStateBinder {
    drawer_didChangeToState<R = void, P0 = unknown, P1 = boolean>(_drawer: P0, _didChangeToState: P1): R;
    _updateDrawer_withVisibilityState<R = void, P0 = unknown, P1 = unknown>(__updateDrawer: P0, _withVisibilityState: P1): R;
  }
  namespace classes {
    export interface NSDrawerBinder<T = any> extends NSViewStateBinder {
      alloc<R = NSDrawerBinder>(): R;
      new: <R = NSDrawerBinder>() => R;
    }
  }
}

declare const NSDrawerBinder: cocoa.classes.NSDrawerBinder;
