/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorModelPickerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    colorModelPickerDidChange<R = void, P0 = MSColorModelPicker>(_colorModelPickerDidChange: P0): R;
  }
  namespace MSColorModelPickerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
