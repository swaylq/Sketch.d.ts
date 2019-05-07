/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMenuActionController<T0 = void, T1 = void, T2 = void> extends NSObject, QLPreviewMenuItemDelegateProtocol {
    aimFrame<R = CGRect>(): R;
  }
  namespace _NSMenuActionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, QLPreviewMenuItemDelegateProtocol {
      alloc<R = _NSMenuActionController>(): R;
      new: <R = _NSMenuActionController>() => R;
    }
  }
}
