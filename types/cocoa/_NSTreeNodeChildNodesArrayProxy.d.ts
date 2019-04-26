/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTreeNodeChildNodesArrayProxy<T0 = void, T1 = void, T2 = void> extends NSObject {
    insertObjects_inSubNodesAtIndexes<R = void, P0 = unknown, P1 = unknown>(_insertObjects: P0, _inSubNodesAtIndexes: P1): R;
    insertObject_inSubNodesAtIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _inSubNodesAtIndex: P1): R;
    removeSubNodesAtIndexes<R = void, P0 = unknown>(_removeSubNodesAtIndexes: P0): R;
    removeObjectFromSubNodesAtIndex<R = void, P0 = number>(_removeObjectFromSubNodesAtIndex: P0): R;
    getSubNodes_range<R = void, P0 = unknown, P1 = _NSRange>(_getSubNodes: P0, _range: P1): R;
    subNodesAtIndexes<R = unknown, P0 = unknown>(_subNodesAtIndexes: P0): R;
    objectInSubNodesAtIndex<R = unknown, P0 = number>(_objectInSubNodesAtIndex: P0): R;
    countOfSubNodes<R = number>(): R;
    initWithTreeNode<R = unknown, P0 = unknown>(_initWithTreeNode: P0): R;
  }
  namespace _NSTreeNodeChildNodesArrayProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTreeNodeChildNodesArrayProxy>(): R;
      new: <R = _NSTreeNodeChildNodesArrayProxy>() => R;
    }
  }
}
