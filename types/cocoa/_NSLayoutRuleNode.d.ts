/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLayoutRuleNode<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithRule<R = unknown, P0 = unknown>(_initWithRule: P0): R;
    parentNode<R = _NSLayoutRuleNodeParent>(): R;
    setParentNode<R = void, P0 = _NSLayoutRuleNodeParent>(_v: P0): R;
    representedRule<R = NSLayoutRule>(): R;
    setRepresentedRule<R = void, P0 = NSLayoutRule>(_v: P0): R;
  }
  namespace _NSLayoutRuleNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSLayoutRuleNode>(): R;
      new: <R = _NSLayoutRuleNode>() => R;
    }
  }
}
