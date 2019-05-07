/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLayoutRuleNodeParentProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    _removeChildRuleNode<R = void, P0 = _NSLayoutRuleNode>(__removeChildRuleNode: P0): R;
    _addChildRuleNode<R = void, P0 = _NSLayoutRuleNode>(__addChildRuleNode: P0): R;
    _childRuleNodes<R = NSArray>(): R;
  }
  namespace _NSLayoutRuleNodeParentProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
