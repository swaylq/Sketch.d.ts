/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGPattern<T0 = void, T1 = void, T2 = void> extends SVGElement {
    primitiveRemoveUsedByStrokesObject<R = void, P0 = unknown>(_primitiveRemoveUsedByStrokesObject: P0): R;
    primitiveAddUsedByStrokesObject<R = void, P0 = unknown>(_primitiveAddUsedByStrokesObject: P0): R;
    removeUsedByStrokesObject<R = void, P0 = unknown>(_removeUsedByStrokesObject: P0): R;
    addUsedByStrokesObject<R = void, P0 = unknown>(_addUsedByStrokesObject: P0): R;
    primitiveRemoveUsedByFillsObject<R = void, P0 = unknown>(_primitiveRemoveUsedByFillsObject: P0): R;
    primitiveAddUsedByFillsObject<R = void, P0 = unknown>(_primitiveAddUsedByFillsObject: P0): R;
    removeUsedByFillsObject<R = void, P0 = unknown>(_removeUsedByFillsObject: P0): R;
    addUsedByFillsObject<R = void, P0 = unknown>(_addUsedByFillsObject: P0): R;
    y<R = number>(): R;
    setY<R = void, P0 = number>(_v: P0): R;
    x<R = number>(): R;
    setX<R = void, P0 = number>(_v: P0): R;
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
    patternUnits<R = NSString>(): R;
    setPatternUnits<R = void, P0 = NSString>(_v: P0): R;
    height<R = number>(): R;
    setHeight<R = void, P0 = number>(_v: P0): R;
    usedByStrokes<R = NSSet>(): R;
    setUsedByStrokes<R = void, P0 = NSSet>(_v: P0): R;
    usedByFills<R = NSSet>(): R;
    setUsedByFills<R = void, P0 = NSSet>(_v: P0): R;
  }
  namespace _SVGPattern {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGElement {
      alloc<R = _SVGPattern>(): R;
      new: <R = _SVGPattern>() => R;
    }
  }
}
