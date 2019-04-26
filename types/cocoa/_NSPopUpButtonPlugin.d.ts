/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPopUpButtonPlugin<T0 = void, T1 = void, T2 = void> extends _NSSelectionBinderPlugin {
    _shouldCreateSelectionItemInControl<R = boolean, P0 = unknown>(__shouldCreateSelectionItemInControl: P0): R;
    _clearUnneccessaryItems<R = void, P0 = unknown>(__clearUnneccessaryItems: P0): R;
    _supposedNumberOfItems<R = number>(): R;
    _insertPopUpButtonItemInCellOrControl_title_representedObject_menuItemIndex_index<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = number>(__insertPopUpButtonItemInCellOrControl: P0, _title: P1, _representedObject: P2, _menuItemIndex: P3, _index: P4): R;
    isMemberOfDynamicallyGeneratedMenuItems<R = boolean, P0 = unknown>(_isMemberOfDynamicallyGeneratedMenuItems: P0): R;
    forgetAllDynamicallyGeneratedMenuItems<R = void>(): R;
    forgetDynamicallyGeneratedMenuItem<R = void, P0 = unknown>(_forgetDynamicallyGeneratedMenuItem: P0): R;
    recordDynamicallyGeneratedMenuItem<R = void, P0 = unknown>(_recordDynamicallyGeneratedMenuItem: P0): R;
  }
  namespace _NSPopUpButtonPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSSelectionBinderPlugin {
      alloc<R = _NSPopUpButtonPlugin>(): R;
      new: <R = _NSPopUpButtonPlugin>() => R;
    }
  }
}
