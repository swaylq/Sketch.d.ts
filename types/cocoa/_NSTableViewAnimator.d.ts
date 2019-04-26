/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableViewAnimator<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {
    selectRowIndexes_byExtendingSelection<R = void, P0 = unknown, P1 = boolean>(_selectRowIndexes: P0, _byExtendingSelection: P1): R;
  }
  namespace _NSTableViewAnimator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {}
  }
}
