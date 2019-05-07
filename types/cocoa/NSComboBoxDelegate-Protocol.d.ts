/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSTextFieldDelegateProtocol {
    comboBoxSelectionIsChanging<R = void, P0 = NSNotification>(_comboBoxSelectionIsChanging: P0): R;
    comboBoxSelectionDidChange<R = void, P0 = NSNotification>(_comboBoxSelectionDidChange: P0): R;
    comboBoxWillDismiss<R = void, P0 = NSNotification>(_comboBoxWillDismiss: P0): R;
    comboBoxWillPopUp<R = void, P0 = NSNotification>(_comboBoxWillPopUp: P0): R;
  }
  namespace NSComboBoxDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldDelegateProtocol {}
  }
}
