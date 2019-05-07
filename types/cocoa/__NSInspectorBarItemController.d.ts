/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSInspectorBarItemController<T0 = void, T1 = void, T2 = void> extends NSObject, NSInspectorBarItemControllerProtocol, NSMenuDelegateProtocol, NSComboBoxCellDataSourceProtocol {}
  namespace __NSInspectorBarItemController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSInspectorBarItemControllerProtocol, NSMenuDelegateProtocol, NSComboBoxCellDataSourceProtocol {
      alloc<R = __NSInspectorBarItemController>(): R;
      new: <R = __NSInspectorBarItemController>() => R;
      favoriteFontSizes<R = unknown>(): R;
    }
  }
}
