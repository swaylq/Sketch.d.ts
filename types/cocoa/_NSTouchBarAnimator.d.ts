/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarAnimator<T0 = void, T1 = void, T2 = void> extends _NSObjectAnimator {
    setItemIdentifiers<R = void, P0 = unknown>(_setItemIdentifiers: P0): R;
  }
  namespace _NSTouchBarAnimator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSObjectAnimator {}
  }
}
