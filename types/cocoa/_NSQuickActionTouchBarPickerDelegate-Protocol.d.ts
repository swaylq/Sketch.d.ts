/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarPickerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    cancelQuickActionTouchBarPicker<R = void, P0 = _NSQuickActionTouchBarPicker>(_cancelQuickActionTouchBarPicker: P0): R;
    quickActionTouchBarPicker_invokeQuickActionForItemDataSource<R = void, P0 = _NSQuickActionTouchBarPicker, P1 = _NSQuickActionTouchBarItemDataSource>(_quickActionTouchBarPicker: P0, _invokeQuickActionForItemDataSource: P1): R;
  }
  namespace _NSQuickActionTouchBarPickerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
