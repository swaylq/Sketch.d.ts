/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDuplicateDocumentAnimationProjectionWindow<T0 = void, T1 = void, T2 = void> extends _NSSlideAndCrossFadeAnimationProjectionWindow {
    initWithSourceWindow_targetWindow<R = unknown, P0 = unknown, P1 = unknown>(_initWithSourceWindow: P0, _targetWindow: P1): R;
  }
  namespace _NSDuplicateDocumentAnimationProjectionWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSSlideAndCrossFadeAnimationProjectionWindow {
      alloc<R = _NSDuplicateDocumentAnimationProjectionWindow>(): R;
      new: <R = _NSDuplicateDocumentAnimationProjectionWindow>() => R;
    }
  }
}
