/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerUser<T0 = void, T1 = void, T2 = void> extends NSColorPicker, NSColorPickingCustomProtocol {
    remove<R = void, P0 = unknown>(_remove: P0): R;
    _remove<R = void, P0 = unknown>(__remove: P0): R;
    _removeOrRename<R = boolean, P0 = unknown>(__removeOrRename: P0): R;
    paste<R = void, P0 = unknown>(_paste: P0): R;
    copy<R = void, P0 = unknown>(_copy: P0): R;
    rename<R = void, P0 = unknown>(_rename: P0): R;
    _rename<R = void, P0 = unknown>(__rename: P0): R;
    validateRename<R = unknown>(): R;
    _popUpButton<R = unknown>(): R;
    open<R = void, P0 = unknown>(_open: P0): R;
    _open<R = void, P0 = unknown>(__open: P0): R;
    _open_fromImage_withName<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__open: P0, _fromImage: P1, _withName: P2): R;
    _addImage_named<R = void, P0 = unknown, P1 = unknown>(__addImage: P0, _named: P1): R;
    _newImageName<R = unknown, P0 = unknown>(__newImageName: P0): R;
    switchImage<R = void, P0 = unknown>(_switchImage: P0): R;
    _switchImage_andUpdateColor<R = void, P0 = unknown, P1 = boolean>(__switchImage: P0, _andUpdateColor: P1): R;
    worksWhenModal<R = boolean>(): R;
    _restoreMode<R = void>(): R;
    _saveMode<R = void>(): R;
    saveImageNamed_andShowWarnings<R = boolean, P0 = unknown, P1 = boolean>(_saveImageNamed: P0, _andShowWarnings: P1): R;
    _shortNameFor<R = unknown, P0 = unknown>(__shortNameFor: P0): R;
    _setCurrImageName<R = void, P0 = unknown>(__setCurrImageName: P0): R;
    _imageFromItemTitle<R = unknown, P0 = unknown>(__imageFromItemTitle: P0): R;
    userPickerView<R = NSView>(): R;
    setUserPickerView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSColorPickerUser {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorPicker, NSColorPickingCustomProtocol {
      alloc<R = NSColorPickerUser>(): R;
      new: <R = NSColorPickerUser>() => R;
    }
  }
}

declare const NSColorPickerUser: cocoa.NSColorPickerUser.CLASS;
