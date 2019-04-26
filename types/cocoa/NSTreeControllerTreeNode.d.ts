/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTreeControllerTreeNode<T0 = void, T1 = void, T2 = void> extends NSTreeNode {
    updateChildNodesForKeyPath_affectedIndexPaths<R = void, P0 = unknown, P1 = unknown>(_updateChildNodesForKeyPath: P0, _affectedIndexPaths: P1): R;
    _removeSubNodesAtIndexes<R = void, P0 = unknown>(__removeSubNodesAtIndexes: P0): R;
    removeObjectFromSubNodesAtIndex<R = void, P0 = number>(_removeObjectFromSubNodesAtIndex: P0): R;
    insertObject_inSubNodesAtIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _inSubNodesAtIndex: P1): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    isLeaf<R = boolean>(): R;
    _leafState<R = number>(): R;
    countOfSubNodes<R = number>(): R;
    willAccessChildNodes<R = void>(): R;
    countKeyPath<R = unknown>(): R;
    childrenKeyPath<R = unknown>(): R;
    leafKeyPath<R = unknown>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _configureObservingWithOption<R = void, P0 = number>(__configureObservingWithOption: P0): R;
    _configureObservingForChildNodesWithOption<R = void, P0 = number>(__configureObservingForChildNodesWithOption: P0): R;
    _tearDownObserving<R = void>(): R;
    _setupObserving<R = void>(): R;
    _detachFromParent<R = void>(): R;
    dealloc<R = void>(): R;
    initWithRepresentedObject_treeController<R = unknown, P0 = unknown, P1 = unknown>(_initWithRepresentedObject: P0, _treeController: P1): R;
  }
  namespace NSTreeControllerTreeNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTreeNode {
      alloc<R = NSTreeControllerTreeNode>(): R;
      new: <R = NSTreeControllerTreeNode>() => R;
    }
  }
}

declare const NSTreeControllerTreeNode: cocoa.NSTreeControllerTreeNode.CLASS;
