/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGMask<T0 = void, T1 = void, T2 = void> extends SVGGroupElement {
    primitiveRemoveMaskingObject<R = void, P0 = unknown>(_primitiveRemoveMaskingObject: P0): R;
    primitiveAddMaskingObject<R = void, P0 = unknown>(_primitiveAddMaskingObject: P0): R;
    removeMaskingObject<R = void, P0 = unknown>(_removeMaskingObject: P0): R;
    addMaskingObject<R = void, P0 = unknown>(_addMaskingObject: P0): R;
    masking<R = NSSet>(): R;
    setMasking<R = void, P0 = NSSet>(_v: P0): R;
  }
  namespace _SVGMask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGGroupElement {
      alloc<R = _SVGMask>(): R;
      new: <R = _SVGMask>() => R;
    }
  }
}
