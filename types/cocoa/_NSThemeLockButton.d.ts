/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeLockButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    _configureLockButton<R = void>(): R;
  }
  namespace _NSThemeLockButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = _NSThemeLockButton>(): R;
      new: <R = _NSThemeLockButton>() => R;
      lockButtonInView_action<R = unknown, P0 = unknown, P1 = string>(_lockButtonInView: P0, _action: P1): R;
    }
  }
}
