/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGStroke<T0 = void, T1 = void, T2 = void> extends SVGElement {
    primitiveRemoveUsedByObject<R = void, P0 = unknown>(_primitiveRemoveUsedByObject: P0): R;
    primitiveAddUsedByObject<R = void, P0 = unknown>(_primitiveAddUsedByObject: P0): R;
    removeUsedByObject<R = void, P0 = unknown>(_removeUsedByObject: P0): R;
    addUsedByObject<R = void, P0 = unknown>(_addUsedByObject: P0): R;
    primitiveSetPattern<R = void, P0 = unknown>(_primitiveSetPattern: P0): R;
    primitiveSetGradient<R = void, P0 = unknown>(_primitiveSetGradient: P0): R;
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
    linejoin<R = NSString>(): R;
    setLinejoin<R = void, P0 = NSString>(_v: P0): R;
    linecap<R = NSString>(): R;
    setLinecap<R = void, P0 = NSString>(_v: P0): R;
    dashes<R = NSArray>(): R;
    setDashes<R = void, P0 = NSArray>(_v: P0): R;
    color<R = MSImmutableColor>(): R;
    setColor<R = void, P0 = MSImmutableColor>(_v: P0): R;
    usedBy<R = NSSet>(): R;
    setUsedBy<R = void, P0 = NSSet>(_v: P0): R;
    pattern<R = SVGPattern>(): R;
    setPattern<R = void, P0 = SVGPattern>(_v: P0): R;
    gradient<R = SVGGradient>(): R;
    setGradient<R = void, P0 = SVGGradient>(_v: P0): R;
  }
  namespace _SVGStroke {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGElement {
      alloc<R = _SVGStroke>(): R;
      new: <R = _SVGStroke>() => R;
    }
  }
}
