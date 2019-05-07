/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConstraintDescriptionLayoutRuleNode<T0 = void, T1 = void, T2 = void> extends _NSLayoutRuleNode {
    ownedConstraint<R = NSLayoutConstraint>(): R;
    setOwnedConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
  }
  namespace _NSConstraintDescriptionLayoutRuleNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSLayoutRuleNode {
      alloc<R = _NSConstraintDescriptionLayoutRuleNode>(): R;
      new: <R = _NSConstraintDescriptionLayoutRuleNode>() => R;
    }
  }
}
