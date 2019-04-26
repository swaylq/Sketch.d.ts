/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPopoverTransitionView<T0 = void, T1 = void, T2 = void> extends NSView {
    initWithOldContent_newContent<R = unknown, P0 = unknown, P1 = unknown>(_initWithOldContent: P0, _newContent: P1): R;
  }
  namespace _NSPopoverTransitionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSPopoverTransitionView>(): R;
      new: <R = _NSPopoverTransitionView>() => R;
    }
  }
}
