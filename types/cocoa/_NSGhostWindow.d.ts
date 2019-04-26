/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGhostWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    constrainFrameRect_toScreen<R = CGRect, P0 = CGRect, P1 = unknown>(_constrainFrameRect: P0, _toScreen: P1): R;
    hasKeyAppearance<R = boolean>(): R;
  }
  namespace _NSGhostWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = _NSGhostWindow>(): R;
      new: <R = _NSGhostWindow>() => R;
    }
  }
}
