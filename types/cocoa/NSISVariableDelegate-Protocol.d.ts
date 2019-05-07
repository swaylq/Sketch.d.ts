/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISVariableDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    nsis_valueOfVariableIsUserObservable<R = boolean, P0 = NSISVariable>(_nsis_valueOfVariableIsUserObservable: P0): R;
    nsis_descriptionOfVariable<R = NSString, P0 = NSISVariable>(_nsis_descriptionOfVariable: P0): R;
    nsis_valueOfVariable_didChangeInEngine<R = void, P0 = NSISVariable, P1 = NSISEngine>(_nsis_valueOfVariable: P0, _didChangeInEngine: P1): R;
    nsis_orientationHintForVariable<R = number, P0 = NSISVariable>(_nsis_orientationHintForVariable: P0): R;
  }
  namespace NSISVariableDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
