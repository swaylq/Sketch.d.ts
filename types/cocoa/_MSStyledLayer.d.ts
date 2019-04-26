/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyledLayer<T0 = void, T1 = void, T2 = void> extends MSLayer {
    style<R = MSStyle>(): R;
    setStyle<R = void, P0 = MSStyle>(_v: P0): R;
    sharedStyleID<R = NSString>(): R;
    setSharedStyleID<R = void, P0 = NSString>(_v: P0): R;
    hasClippingMask<R = boolean>(): R;
    setHasClippingMask<R = void, P0 = boolean>(_v: P0): R;
    clippingMaskMode<R = number>(): R;
    setClippingMaskMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSStyledLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayer {
      alloc<R = _MSStyledLayer>(): R;
      new: <R = _MSStyledLayer>() => R;
    }
  }
}
