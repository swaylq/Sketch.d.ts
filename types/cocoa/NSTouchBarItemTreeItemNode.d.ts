/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeItemNode<T0 = void, T1 = void, T2 = void> extends NSTouchBarItemTreeNode {
    description<R = unknown>(): R;
    initWithItem<R = unknown, P0 = unknown>(_initWithItem: P0): R;
    itemIdentifier<R = unknown>(): R;
    item<R = NSTouchBarItem>(): R;
  }
  namespace NSTouchBarItemTreeItemNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItemTreeNode {
      alloc<R = NSTouchBarItemTreeItemNode>(): R;
      new: <R = NSTouchBarItemTreeItemNode>() => R;
      nodeForItem<R = unknown, P0 = unknown>(_nodeForItem: P0): R;
    }
  }
}

declare const NSTouchBarItemTreeItemNode: cocoa.NSTouchBarItemTreeItemNode.CLASS;
