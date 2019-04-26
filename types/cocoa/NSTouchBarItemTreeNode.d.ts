/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeNode<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    flatFilterWithOrder_handler<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_flatFilterWithOrder: P0, _handler: P1): R;
    enumerateWithOrder_handler<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateWithOrder: P0, _handler: P1): R;
    enumerateWithOrder_descentHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateWithOrder: P0, _descentHandler: P1): R;
    _enumerateWithOrder_handler<R = boolean, P0 = number, P1 = CDUnknownBlockType>(__enumerateWithOrder: P0, _handler: P1): R;
    dealloc<R = void>(): R;
    initWithNode_children<R = unknown, P0 = unknown, P1 = unknown>(_initWithNode: P0, _children: P1): R;
    nodeByMovingChild_toIndex<R = unknown, P0 = unknown, P1 = number>(_nodeByMovingChild: P0, _toIndex: P1): R;
    nodeByReplacingChild_withNodes<R = unknown, P0 = unknown, P1 = unknown>(_nodeByReplacingChild: P0, _withNodes: P1): R;
    nodeByRemovingChild<R = unknown, P0 = unknown>(_nodeByRemovingChild: P0): R;
    nodeByInsertingChild_atIndex<R = unknown, P0 = unknown, P1 = number>(_nodeByInsertingChild: P0, _atIndex: P1): R;
    childNodes<R = NSArray>(): R;
    setChildNodes<R = void, P0 = NSArray>(_v: P0): R;
    leafNodes<R = NSArray>(): R;
  }
  namespace NSTouchBarItemTreeNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSTouchBarItemTreeNode>(): R;
      new: <R = NSTouchBarItemTreeNode>() => R;
    }
  }
}

declare const NSTouchBarItemTreeNode: cocoa.NSTouchBarItemTreeNode.CLASS;
