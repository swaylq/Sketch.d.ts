/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcretePointerArray<T = any> extends NSPointerArray {
    removePointer<R = void, P0 = void>(_removePointer: P0): R;
    indexOfPointer<R = number, P0 = void>(_indexOfPointer: P0): R;
    setCount<R = void, P0 = number>(_setCount: P0): R;
    count<R = number>(): R;
    _markNeedsCompaction<R = void>(): R;
    arrayGrow<R = void, P0 = number>(_arrayGrow: P0): R;
    pointerFunctions<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    classForCoder<R = unknown>(): R;
  }
  namespace classes {
    export interface NSConcretePointerArray<T = any> extends NSPointerArray {
      alloc<R = NSConcretePointerArray>(): R;
      new: <R = NSConcretePointerArray>() => R;
    }
  }
}

declare const NSConcretePointerArray: cocoa.classes.NSConcretePointerArray;
