/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStatusItemPoofAnimator<T0 = void, T1 = void, T2 = void> extends NSPanel {
    startAnimatingWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_startAnimatingWithCompletionHandler: P0): R;
    initForAnimatingWindow<R = unknown, P0 = unknown>(_initForAnimatingWindow: P0): R;
    initWithStatusItem<R = unknown, P0 = unknown>(_initWithStatusItem: P0): R;
    _generateSnapshotForWindow<R = unknown, P0 = unknown>(__generateSnapshotForWindow: P0): R;
  }
  namespace _NSStatusItemPoofAnimator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = _NSStatusItemPoofAnimator>(): R;
      new: <R = _NSStatusItemPoofAnimator>() => R;
    }
  }
}
