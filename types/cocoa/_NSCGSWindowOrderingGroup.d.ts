/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowOrderingGroup<T0 = void, T1 = void, T2 = void> extends NSObject {
    removeWindow<R = void, P0 = unknown>(_removeWindow: P0): R;
    addWindow_aboveWindow<R = void, P0 = unknown, P1 = unknown>(_addWindow: P0, _aboveWindow: P1): R;
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    initWithWindows<R = unknown, P0 = unknown>(_initWithWindows: P0): R;
    empty<R = boolean>(): R;
    windows<R = NSArray>(): R;
  }
  namespace _NSCGSWindowOrderingGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSCGSWindowOrderingGroup>(): R;
      new: <R = _NSCGSWindowOrderingGroup>() => R;
    }
  }
}
