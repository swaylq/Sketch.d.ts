/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarItemTreeSlices<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithLeftNode_rightNode<R = unknown, P0 = unknown, P1 = unknown>(_initWithLeftNode: P0, _rightNode: P1): R;
    rightNode<R = NSTouchBarItemTreeNode>(): R;
    leftNode<R = NSTouchBarItemTreeNode>(): R;
  }
  namespace _NSTouchBarItemTreeSlices {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTouchBarItemTreeSlices>(): R;
      new: <R = _NSTouchBarItemTreeSlices>() => R;
    }
  }
}
