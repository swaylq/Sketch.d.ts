/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeBarProviderNode<T0 = void, T1 = void, T2 = void> extends NSTouchBarItemTreeNode, NSTouchBarItemTreeParentNodeProtocol {
    itemIdentifier<R = unknown>(): R;
    touchBar<R = NSTouchBar>(): R;
    description<R = NSString>(): R;
    touchBarLayoutDirection<R = number>(): R;
    touchBarContainingChildNodes<R = NSTouchBar>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarItemTreeBarProviderNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItemTreeNode, NSTouchBarItemTreeParentNodeProtocol {
      alloc<R = NSTouchBarItemTreeBarProviderNode>(): R;
      new: <R = NSTouchBarItemTreeBarProviderNode>() => R;
      nodeForTouchBar<R = unknown, P0 = unknown>(_nodeForTouchBar: P0): R;
    }
  }
}

declare const NSTouchBarItemTreeBarProviderNode: cocoa.NSTouchBarItemTreeBarProviderNode.CLASS;
