/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXMLPlaceholderNode<T0 = void, T1 = void, T2 = void> extends NSObject {
    initWithKind_options<R = unknown, P0 = number, P1 = number>(_initWithKind: P0, _options: P1): R;
    initWithKind<R = unknown, P0 = number>(_initWithKind: P0): R;
  }
  namespace _NSXMLPlaceholderNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSXMLPlaceholderNode>(): R;
      new: <R = _NSXMLPlaceholderNode>() => R;
    }
  }
}
