/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOutlineViewAnimator<T0 = void, T1 = void, T2 = void> extends _NSTableViewAnimator {
    collapseItem<R = void, P0 = unknown>(_collapseItem: P0): R;
    collapseItem_collapseChildren<R = void, P0 = unknown, P1 = boolean>(_collapseItem: P0, _collapseChildren: P1): R;
    expandItem<R = void, P0 = unknown>(_expandItem: P0): R;
    expandItem_expandChildren<R = void, P0 = unknown, P1 = boolean>(_expandItem: P0, _expandChildren: P1): R;
    _animateThis<R = void, P0 = CDUnknownBlockType>(__animateThis: P0): R;
  }
  namespace _NSOutlineViewAnimator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSTableViewAnimator {}
  }
}
