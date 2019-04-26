/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownTextFieldDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    refreshAction<R = void, P0 = unknown>(_refreshAction: P0): R;
    valueForUpDownTextField<R = number, P0 = MSUpDownProtocol>(_valueForUpDownTextField: P0): R;
  }
  namespace MSUpDownTextFieldDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
