/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorModePickerControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    colorPickerController_didChangeFillType_gradientType<R = void, P0 = MSColorModePickerController, P1 = number, P2 = number>(_colorPickerController: P0, _didChangeFillType: P1, _gradientType: P2): R;
  }
  namespace MSColorModePickerControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
