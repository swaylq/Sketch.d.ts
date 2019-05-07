/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingServicePickerReserved<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSSharingServicePickerReserved {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSharingServicePickerReserved>(): R;
      new: <R = NSSharingServicePickerReserved>() => R;
    }
  }
}

declare const NSSharingServicePickerReserved: cocoa.NSSharingServicePickerReserved.CLASS;
