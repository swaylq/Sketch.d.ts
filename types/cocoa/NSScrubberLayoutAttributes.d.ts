/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberLayoutAttributes<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    _layoutAttributesByBlendingFraction_ofAttributes<R = unknown, P0 = number, P1 = unknown>(__layoutAttributesByBlendingFraction: P0, _ofAttributes: P1): R;
    setEscapesFromScrollView<R = void, P0 = boolean>(_setEscapesFromScrollView: P0): R;
    escapesFromScrollView<R = boolean>(): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    alpha<R = number>(): R;
    setAlpha<R = void, P0 = number>(_v: P0): R;
    frame<R = CGRect>(): R;
    setFrame<R = void, P0 = CGRect>(_v: P0): R;
    itemIndex<R = number>(): R;
    setItemIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSScrubberLayoutAttributes {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSScrubberLayoutAttributes>(): R;
      new: <R = NSScrubberLayoutAttributes>() => R;
      layoutAttributesForItemAtIndex<R = unknown, P0 = number>(_layoutAttributesForItemAtIndex: P0): R;
    }
  }
}

declare const NSScrubberLayoutAttributes: cocoa.NSScrubberLayoutAttributes.CLASS;
