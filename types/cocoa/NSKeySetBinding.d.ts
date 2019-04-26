/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeySetBinding<T0 = void, T1 = void, T2 = void> extends NSKeyBinding {
    isScalarProperty<R = boolean>(): R;
    setValue_inObject<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _inObject: P1): R;
  }
  namespace NSKeySetBinding {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyBinding {
      alloc<R = NSKeySetBinding>(): R;
      new: <R = NSKeySetBinding>() => R;
    }
  }
}

declare const NSKeySetBinding: cocoa.NSKeySetBinding.CLASS;
