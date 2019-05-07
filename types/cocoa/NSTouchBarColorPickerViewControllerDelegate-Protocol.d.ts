/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerViewControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    colorPickerViewController_didSelectColor<R = void, P0 = NSTouchBarColorPickerViewController, P1 = NSColor>(_colorPickerViewController: P0, _didSelectColor: P1): R;
    colorPicker_didChangeCurrentModeFrom_to<R = void, P0 = NSTouchBarColorPickerViewController, P1 = number, P2 = number>(_colorPicker: P0, _didChangeCurrentModeFrom: P1, _to: P2): R;
    colorPickerViewControllerDidCancel<R = void, P0 = NSTouchBarColorPickerViewController>(_colorPickerViewControllerDidCancel: P0): R;
    colorPickerViewControllerDidEnd<R = void, P0 = NSTouchBarColorPickerViewController>(_colorPickerViewControllerDidEnd: P0): R;
    colorPickerViewControllerWillBegin<R = void, P0 = NSTouchBarColorPickerViewController>(_colorPickerViewControllerWillBegin: P0): R;
  }
  namespace NSTouchBarColorPickerViewControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
