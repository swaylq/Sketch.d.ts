/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    validate<R = boolean>(): R;
    stateForConstraint<R = number>(): R;
    isActive<R = boolean>(): R;
    validationKeyPath<R = NSString>(): R;
    actionKeyPath<R = NSString>(): R;
  }
  namespace MSConstraintAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSConstraintAction>(): R;
      new: <R = MSConstraintAction>() => R;
    }
  }
}

declare const MSConstraintAction: cocoa.MSConstraintAction.CLASS;
