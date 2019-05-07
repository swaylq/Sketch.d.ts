/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLQueueNode<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSURLQueueNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSURLQueueNode>(): R;
      new: <R = NSURLQueueNode>() => R;
    }
  }
}

declare const NSURLQueueNode: cocoa.NSURLQueueNode.CLASS;
