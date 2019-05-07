/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGFill<T0 = void, T1 = void, T2 = void> extends SVGElement {
    primitiveRemoveUsedByObject<R = void, P0 = unknown>(_primitiveRemoveUsedByObject: P0): R;
    primitiveAddUsedByObject<R = void, P0 = unknown>(_primitiveAddUsedByObject: P0): R;
    removeUsedByObject<R = void, P0 = unknown>(_removeUsedByObject: P0): R;
    addUsedByObject<R = void, P0 = unknown>(_addUsedByObject: P0): R;
    primitiveSetPattern<R = void, P0 = unknown>(_primitiveSetPattern: P0): R;
    primitiveSetGradient<R = void, P0 = unknown>(_primitiveSetGradient: P0): R;
    windingrule<R = NSString>(): R;
    setWindingrule<R = void, P0 = NSString>(_v: P0): R;
    opacity<R = number>(): R;
    setOpacity<R = void, P0 = number>(_v: P0): R;
    color<R = MSImmutableColor>(): R;
    setColor<R = void, P0 = MSImmutableColor>(_v: P0): R;
    usedBy<R = NSSet>(): R;
    setUsedBy<R = void, P0 = NSSet>(_v: P0): R;
    pattern<R = SVGPattern>(): R;
    setPattern<R = void, P0 = SVGPattern>(_v: P0): R;
    gradient<R = SVGGradient>(): R;
    setGradient<R = void, P0 = SVGGradient>(_v: P0): R;
  }
  namespace _SVGFill {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGElement {
      alloc<R = _SVGFill>(): R;
      new: <R = _SVGFill>() => R;
    }
  }
}
