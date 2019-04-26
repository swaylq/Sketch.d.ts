/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyledLayer<T0 = void, T1 = void, T2 = void> extends MSImmutableLayer {
    style<R = MSImmutableStyle>(): R;
    setStyle<R = void, P0 = MSImmutableStyle>(_v: P0): R;
    sharedStyleID<R = NSString>(): R;
    setSharedStyleID<R = void, P0 = NSString>(_v: P0): R;
    hasClippingMask<R = boolean>(): R;
    setHasClippingMask<R = void, P0 = boolean>(_v: P0): R;
    clippingMaskMode<R = number>(): R;
    setClippingMaskMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableStyledLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableLayer {
      alloc<R = _MSImmutableStyledLayer>(): R;
      new: <R = _MSImmutableStyledLayer>() => R;
    }
  }
}
