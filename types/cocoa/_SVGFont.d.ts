/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGFont<T0 = void, T1 = void, T2 = void> extends SVGElement {
    primitiveRemoveUsedByObject<R = void, P0 = unknown>(_primitiveRemoveUsedByObject: P0): R;
    primitiveAddUsedByObject<R = void, P0 = unknown>(_primitiveAddUsedByObject: P0): R;
    removeUsedByObject<R = void, P0 = unknown>(_removeUsedByObject: P0): R;
    addUsedByObject<R = void, P0 = unknown>(_addUsedByObject: P0): R;
    weight<R = number>(): R;
    setWeight<R = void, P0 = number>(_v: P0): R;
    variant<R = NSString>(): R;
    setVariant<R = void, P0 = NSString>(_v: P0): R;
    style<R = NSString>(): R;
    setStyle<R = void, P0 = NSString>(_v: P0): R;
    size<R = number>(): R;
    setSize<R = void, P0 = number>(_v: P0): R;
    family<R = NSString>(): R;
    setFamily<R = void, P0 = NSString>(_v: P0): R;
    usedBy<R = NSSet>(): R;
    setUsedBy<R = void, P0 = NSSet>(_v: P0): R;
  }
  namespace _SVGFont {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGElement {
      alloc<R = _SVGFont>(): R;
      new: <R = _SVGFont>() => R;
    }
  }
}
