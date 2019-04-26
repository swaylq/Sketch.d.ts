/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSControllerTreeProxy<T0 = void, T1 = void, T2 = void> extends NSTreeNode, _NSBindingTreeProtocol {
    objectInChildNodesAtIndex<R = unknown, P0 = number>(_objectInChildNodesAtIndex: P0): R;
    descendantNodeAtIndexPath<R = unknown, P0 = unknown>(_descendantNodeAtIndexPath: P0): R;
    count<R = number>(): R;
    parentNode<R = unknown>(): R;
    mutableChildNodes<R = unknown>(): R;
    childNodes<R = unknown>(): R;
    countOfChildNodes<R = number>(): R;
    sortWithSortDescriptors_recursively<R = void, P0 = unknown, P1 = boolean>(_sortWithSortDescriptors: P0, _recursively: P1): R;
    isLeaf<R = boolean>(): R;
    indexPath<R = unknown>(): R;
    representedObject<R = unknown>(): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
  }
  namespace _NSControllerTreeProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTreeNode, _NSBindingTreeProtocol {
      alloc<R = _NSControllerTreeProxy>(): R;
      new: <R = _NSControllerTreeProxy>() => R;
    }
  }
}
