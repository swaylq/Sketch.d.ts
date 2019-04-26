/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGGradient<T0 = void, T1 = void, T2 = void> extends SVGElement {
    primitiveRemoveUsedByStrokesObject<R = void, P0 = unknown>(_primitiveRemoveUsedByStrokesObject: P0): R;
    primitiveAddUsedByStrokesObject<R = void, P0 = unknown>(_primitiveAddUsedByStrokesObject: P0): R;
    removeUsedByStrokesObject<R = void, P0 = unknown>(_removeUsedByStrokesObject: P0): R;
    addUsedByStrokesObject<R = void, P0 = unknown>(_addUsedByStrokesObject: P0): R;
    primitiveRemoveUsedByFillsObject<R = void, P0 = unknown>(_primitiveRemoveUsedByFillsObject: P0): R;
    primitiveAddUsedByFillsObject<R = void, P0 = unknown>(_primitiveAddUsedByFillsObject: P0): R;
    removeUsedByFillsObject<R = void, P0 = unknown>(_removeUsedByFillsObject: P0): R;
    addUsedByFillsObject<R = void, P0 = unknown>(_addUsedByFillsObject: P0): R;
    primitiveSetLinkedTo<R = void, P0 = unknown>(_primitiveSetLinkedTo: P0): R;
    primitiveRemoveLinkedFromObject<R = void, P0 = unknown>(_primitiveRemoveLinkedFromObject: P0): R;
    primitiveAddLinkedFromObject<R = void, P0 = unknown>(_primitiveAddLinkedFromObject: P0): R;
    removeLinkedFromObject<R = void, P0 = unknown>(_removeLinkedFromObject: P0): R;
    addLinkedFromObject<R = void, P0 = unknown>(_addLinkedFromObject: P0): R;
    transform<R = NSAffineTransform>(): R;
    setTransform<R = void, P0 = NSAffineTransform>(_v: P0): R;
    toY<R = number>(): R;
    setToY<R = void, P0 = number>(_v: P0): R;
    toX<R = number>(): R;
    setToX<R = void, P0 = number>(_v: P0): R;
    radial<R = boolean>(): R;
    setRadial<R = void, P0 = boolean>(_v: P0): R;
    fromY<R = number>(): R;
    setFromY<R = void, P0 = number>(_v: P0): R;
    fromX<R = number>(): R;
    setFromX<R = void, P0 = number>(_v: P0): R;
    usedByStrokes<R = NSSet>(): R;
    setUsedByStrokes<R = void, P0 = NSSet>(_v: P0): R;
    usedByFills<R = NSSet>(): R;
    setUsedByFills<R = void, P0 = NSSet>(_v: P0): R;
    linkedTo<R = SVGGradient>(): R;
    setLinkedTo<R = void, P0 = SVGGradient>(_v: P0): R;
    linkedFrom<R = NSSet>(): R;
    setLinkedFrom<R = void, P0 = NSSet>(_v: P0): R;
  }
  namespace _SVGGradient {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGElement {
      alloc<R = _SVGGradient>(): R;
      new: <R = _SVGGradient>() => R;
    }
  }
}
