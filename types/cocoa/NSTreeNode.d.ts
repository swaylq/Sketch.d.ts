/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTreeNode<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSTreeNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTreeNode>(): R;
      new: <R = NSTreeNode>() => R;
      treeNodeWithRepresentedObject<R = unknown, P0 = unknown>(_treeNodeWithRepresentedObject: P0): R;
    }
  }
}

declare const NSTreeNode: cocoa.NSTreeNode.CLASS;
