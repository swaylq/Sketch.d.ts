/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeGroupItemNode<T0 = void, T1 = void, T2 = void> extends NSTouchBarItemTreeItemNode, NSTouchBarItemTreeParentNodeProtocol {
    touchBarLayoutDirection<R = number>(): R;
    touchBarContainingChildNodes<R = NSTouchBar>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarItemTreeGroupItemNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItemTreeItemNode, NSTouchBarItemTreeParentNodeProtocol {
      alloc<R = NSTouchBarItemTreeGroupItemNode>(): R;
      new: <R = NSTouchBarItemTreeGroupItemNode>() => R;
    }
  }
}

declare const NSTouchBarItemTreeGroupItemNode: cocoa.NSTouchBarItemTreeGroupItemNode.CLASS;
