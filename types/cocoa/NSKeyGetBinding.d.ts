/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyGetBinding<T0 = void, T1 = void, T2 = void> extends NSKeyBinding {
    getValueFromObject<R = unknown, P0 = unknown>(_getValueFromObject: P0): R;
  }
  namespace NSKeyGetBinding {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyBinding {
      alloc<R = NSKeyGetBinding>(): R;
      new: <R = NSKeyGetBinding>() => R;
    }
  }
}

declare const NSKeyGetBinding: cocoa.NSKeyGetBinding.CLASS;
