/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObjectAnimator_NSSplitViewItem<T0 = void, T1 = void, T2 = void> extends _NSObjectAnimator {
    _uncollapsePreferringOverlay<R = void>(): R;
    setCollapsed<R = void, P0 = boolean>(_setCollapsed: P0): R;
    setValue_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKeyPath: P1): R;
  }
  namespace _NSObjectAnimator_NSSplitViewItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSObjectAnimator {}
  }
}
