/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextReplacementNode<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace NSTextReplacementNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTextReplacementNode>(): R;
      new: <R = NSTextReplacementNode>() => R;
    }
  }
}

declare const NSTextReplacementNode: cocoa.NSTextReplacementNode.CLASS;
