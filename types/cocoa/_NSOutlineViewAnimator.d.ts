/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOutlineViewAnimator<T = any> extends cocoa._NSTableViewAnimator {
    collapseItem<R = void, P0 = unknown>(_collapseItem: P0): R;
    collapseItem_collapseChildren<R = void, P0 = unknown, P1 = boolean>(_collapseItem: P0, _collapseChildren: P1): R;
    expandItem<R = void, P0 = unknown>(_expandItem: P0): R;
    expandItem_expandChildren<R = void, P0 = unknown, P1 = boolean>(_expandItem: P0, _expandChildren: P1): R;
    _animateThis<R = void, P0 = cocoa.CDUnknownBlockType>(__animateThis: P0): R;
  }
  namespace classes {
    export interface _NSOutlineViewAnimator<T = any> extends cocoa.classes._NSTableViewAnimator {  }
  }
}
