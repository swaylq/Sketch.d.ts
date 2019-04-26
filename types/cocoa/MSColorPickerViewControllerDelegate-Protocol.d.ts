/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorPickerViewControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends MSColorSpaceProviderProtocol {
    subviewsChangedInColorPickerController<R = void, P0 = MSColorPickerViewController>(_subviewsChangedInColorPickerController: P0): R;
    colorPickerController_colorDidChange<R = void, P0 = MSColorPickerViewController, P1 = MSColor>(_colorPickerController: P0, _colorDidChange: P1): R;
  }
  namespace MSColorPickerViewControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorSpaceProviderProtocol {}
  }
}
