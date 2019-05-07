/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSharingServicePickerDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, SHKMenuControllerDelegateProtocol {
    picker<R = NSSharingServicePicker>(): R;
    setPicker<R = void, P0 = NSSharingServicePicker>(_v: P0): R;
  }
  namespace _NSSharingServicePickerDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, SHKMenuControllerDelegateProtocol {
      alloc<R = _NSSharingServicePickerDelegate>(): R;
      new: <R = _NSSharingServicePickerDelegate>() => R;
    }
  }
}
