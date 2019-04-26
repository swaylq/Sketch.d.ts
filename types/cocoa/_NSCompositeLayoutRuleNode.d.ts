/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCompositeLayoutRuleNode<T0 = void, T1 = void, T2 = void> extends _NSLayoutRuleNode, _NSLayoutRuleNodeParentProtocol {
    childNodesCreatingIfNecessary<R = unknown>(): R;
    _childRuleNodes<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSCompositeLayoutRuleNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSLayoutRuleNode, _NSLayoutRuleNodeParentProtocol {
      alloc<R = _NSCompositeLayoutRuleNode>(): R;
      new: <R = _NSCompositeLayoutRuleNode>() => R;
    }
  }
}
