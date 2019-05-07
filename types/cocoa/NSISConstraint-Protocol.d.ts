/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISConstraintProtocol<T0 = void, T1 = void, T2 = void> extends NSISVariableDelegateProtocol {
    secondItem<R = unknown>(): R;
    firstItem<R = unknown>(): R;
  }
  namespace NSISConstraintProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSISVariableDelegateProtocol {}
  }
}
