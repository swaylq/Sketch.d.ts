/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAnimator_NSScrubber<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {
    setSelectionIndex<R = void, P0 = number>(_setSelectionIndex: P0): R;
    scrollItemAtIndex_toAlignment<R = void, P0 = number, P1 = number>(_scrollItemAtIndex: P0, _toAlignment: P1): R;
    setSelectedIndex<R = void, P0 = number>(_setSelectedIndex: P0): R;
    _scrubber<R = unknown>(): R;
  }
  namespace _NSViewAnimator_NSScrubber {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {}
  }
}
