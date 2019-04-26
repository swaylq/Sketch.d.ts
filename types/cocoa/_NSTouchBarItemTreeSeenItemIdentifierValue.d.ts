/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarItemTreeSeenItemIdentifierValue<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    nodeList<R = NSMutableArray>(): R;
    setNodeList<R = void, P0 = NSMutableArray>(_v: P0): R;
    responderBarLevel<R = number>(): R;
    setResponderBarLevel<R = void, P0 = number>(_v: P0): R;
    itemNode<R = NSTouchBarItemTreeItemNode>(): R;
    setItemNode<R = void, P0 = NSTouchBarItemTreeItemNode>(_v: P0): R;
    parentNode<R = NSTouchBarItemTreeParentNode>(): R;
    setParentNode<R = void, P0 = NSTouchBarItemTreeParentNode>(_v: P0): R;
  }
  namespace _NSTouchBarItemTreeSeenItemIdentifierValue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTouchBarItemTreeSeenItemIdentifierValue>(): R;
      new: <R = _NSTouchBarItemTreeSeenItemIdentifierValue>() => R;
    }
  }
}
