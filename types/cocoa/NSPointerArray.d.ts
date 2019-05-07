/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPointerArray<T0 = void, T1 = void, T2 = void> extends NSObject, NSFastEnumerationProtocol, NSCopyingProtocol, NSSecureCodingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    compact<R = void>(): R;
    replacePointerAtIndex_withPointer<R = void, P0 = number, P1 = void>(_replacePointerAtIndex: P0, _withPointer: P1): R;
    insertPointer_atIndex<R = void, P0 = void, P1 = number>(_insertPointer: P0, _atIndex: P1): R;
    removePointerAtIndex<R = void, P0 = number>(_removePointerAtIndex: P0): R;
    addPointer<R = void, P0 = void>(_addPointer: P0): R;
    pointerAtIndex<R = void, P0 = number>(_pointerAtIndex: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithPointerFunctions<R = unknown, P0 = unknown>(_initWithPointerFunctions: P0): R;
    initWithOptions<R = unknown, P0 = number>(_initWithOptions: P0): R;
    allObjects<R = unknown>(): R;
    mutableArray<R = unknown>(): R;
    count<R = number>(): R;
    setCount<R = void, P0 = number>(_v: P0): R;
    pointerFunctions<R = NSPointerFunctions>(): R;
  }
  namespace NSPointerArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSFastEnumerationProtocol, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSPointerArray>(): R;
      new: <R = NSPointerArray>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      pointerArrayWithPointerFunctions<R = unknown, P0 = unknown>(_pointerArrayWithPointerFunctions: P0): R;
      pointerArrayWithOptions<R = unknown, P0 = number>(_pointerArrayWithOptions: P0): R;
      weakObjectsPointerArray<R = unknown>(): R;
      strongObjectsPointerArray<R = unknown>(): R;
      pointerArrayWithWeakObjects<R = unknown>(): R;
      pointerArrayWithStrongObjects<R = unknown>(): R;
    }
  }
}

declare const NSPointerArray: cocoa.NSPointerArray.CLASS;
