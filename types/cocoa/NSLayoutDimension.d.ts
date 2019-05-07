/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutDimension<T0 = void, T1 = void, T2 = void> extends NSLayoutAnchor {
    constraintLessThanOrEqualToAnchor_multiplier_constant<R = unknown, P0 = unknown, P1 = number, P2 = number>(_constraintLessThanOrEqualToAnchor: P0, _multiplier: P1, _constant: P2): R;
    constraintGreaterThanOrEqualToAnchor_multiplier_constant<R = unknown, P0 = unknown, P1 = number, P2 = number>(_constraintGreaterThanOrEqualToAnchor: P0, _multiplier: P1, _constant: P2): R;
    constraintEqualToAnchor_multiplier_constant<R = unknown, P0 = unknown, P1 = number, P2 = number>(_constraintEqualToAnchor: P0, _multiplier: P1, _constant: P2): R;
    constraintLessThanOrEqualToConstant<R = unknown, P0 = number>(_constraintLessThanOrEqualToConstant: P0): R;
    constraintGreaterThanOrEqualToConstant<R = unknown, P0 = number>(_constraintGreaterThanOrEqualToConstant: P0): R;
    constraintEqualToConstant<R = unknown, P0 = number>(_constraintEqualToConstant: P0): R;
    constraintLessThanOrEqualToAnchor_multiplier<R = unknown, P0 = unknown, P1 = number>(_constraintLessThanOrEqualToAnchor: P0, _multiplier: P1): R;
    constraintGreaterThanOrEqualToAnchor_multiplier<R = unknown, P0 = unknown, P1 = number>(_constraintGreaterThanOrEqualToAnchor: P0, _multiplier: P1): R;
    constraintEqualToAnchor_multiplier<R = unknown, P0 = unknown, P1 = number>(_constraintEqualToAnchor: P0, _multiplier: P1): R;
    ruleLessThanOrEqualToConstant_priority_identifier<R = unknown, P0 = number, P1 = number, P2 = unknown>(_ruleLessThanOrEqualToConstant: P0, _priority: P1, _identifier: P2): R;
    ruleGreaterThanOrEqualToConstant_priority_identifier<R = unknown, P0 = number, P1 = number, P2 = unknown>(_ruleGreaterThanOrEqualToConstant: P0, _priority: P1, _identifier: P2): R;
    ruleEqualToConstant_priority_identifier<R = unknown, P0 = number, P1 = number, P2 = unknown>(_ruleEqualToConstant: P0, _priority: P1, _identifier: P2): R;
    ruleGreaterThanOrEqualToConstant<R = unknown, P0 = number>(_ruleGreaterThanOrEqualToConstant: P0): R;
    ruleLessThanOrEqualToConstant<R = unknown, P0 = number>(_ruleLessThanOrEqualToConstant: P0): R;
    ruleEqualToConstant<R = unknown, P0 = number>(_ruleEqualToConstant: P0): R;
    minusDimension<R = unknown, P0 = unknown>(_minusDimension: P0): R;
    plusDimension<R = unknown, P0 = unknown>(_plusDimension: P0): R;
    plus<R = unknown, P0 = number>(_plus: P0): R;
    times<R = unknown, P0 = number>(_times: P0): R;
    anchorBySubtractingDimension<R = unknown, P0 = unknown>(_anchorBySubtractingDimension: P0): R;
    anchorByAddingDimension<R = unknown, P0 = unknown>(_anchorByAddingDimension: P0): R;
    anchorByAddingConstant<R = unknown, P0 = number>(_anchorByAddingConstant: P0): R;
    anchorByMultiplyingByConstant<R = unknown, P0 = number>(_anchorByMultiplyingByConstant: P0): R;
  }
  namespace NSLayoutDimension {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLayoutAnchor {
      alloc<R = NSLayoutDimension>(): R;
      new: <R = NSLayoutDimension>() => R;
    }
  }
}

declare const NSLayoutDimension: cocoa.NSLayoutDimension.CLASS;
