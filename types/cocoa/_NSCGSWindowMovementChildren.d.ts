/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowMovementChildren<T0 = void, T1 = void, T2 = void> extends NSObject {
    commitForWindow<R = void, P0 = unknown>(_commitForWindow: P0): R;
    windowsForWindow<R = unknown, P0 = unknown>(_windowsForWindow: P0): R;
    setWindows<R = void, P0 = unknown>(_setWindows: P0): R;
    removeWindow<R = void, P0 = unknown>(_removeWindow: P0): R;
    addWindow<R = void, P0 = unknown>(_addWindow: P0): R;
    dealloc<R = void>(): R;
  }
  namespace _NSCGSWindowMovementChildren {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSCGSWindowMovementChildren>(): R;
      new: <R = _NSCGSWindowMovementChildren>() => R;
    }
  }
}
