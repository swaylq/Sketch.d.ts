/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcretePointerFunctions<T0 = void, T1 = void, T2 = void> extends NSPointerFunctions {
    usesWeakReadAndWriteBarriers<R = boolean>(): R;
    usesStrongWriteBarrier<R = boolean>(): R;
    relinquishFunction<R = CDUnknownFunctionPointerType>(): R;
    acquireFunction<R = CDUnknownFunctionPointerType>(): R;
    descriptionFunction<R = CDUnknownFunctionPointerType>(): R;
    isEqualFunction<R = CDUnknownFunctionPointerType>(): R;
    hashFunction<R = CDUnknownFunctionPointerType>(): R;
    sizeFunction<R = CDUnknownFunctionPointerType>(): R;
    setUsesWeakReadAndWriteBarriers<R = void, P0 = boolean>(_setUsesWeakReadAndWriteBarriers: P0): R;
    setUsesStrongWriteBarrier<R = void, P0 = boolean>(_setUsesStrongWriteBarrier: P0): R;
    setRelinquishFunction<R = void, P0 = CDUnknownFunctionPointerType>(_setRelinquishFunction: P0): R;
    setAcquireFunction<R = void, P0 = CDUnknownFunctionPointerType>(_setAcquireFunction: P0): R;
    setDescriptionFunction<R = void, P0 = CDUnknownFunctionPointerType>(_setDescriptionFunction: P0): R;
    setIsEqualFunction<R = void, P0 = CDUnknownFunctionPointerType>(_setIsEqualFunction: P0): R;
    setHashFunction<R = void, P0 = CDUnknownFunctionPointerType>(_setHashFunction: P0): R;
    setSizeFunction<R = void, P0 = CDUnknownFunctionPointerType>(_setSizeFunction: P0): R;
    hash<R = number>(): R;
  }
  namespace NSConcretePointerFunctions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPointerFunctions {
      alloc<R = NSConcretePointerFunctions>(): R;
      new: <R = NSConcretePointerFunctions>() => R;
      initializeSlice_withOptions<R = boolean, P0 = NSSlice, P1 = number>(_initializeSlice: P0, _withOptions: P1): R;
      initializeBackingStore_sentinel<R = void, P0 = NSSlice, P1 = boolean>(_initializeBackingStore: P0, _sentinel: P1): R;
    }
  }
}

declare const NSConcretePointerFunctions: cocoa.NSConcretePointerFunctions.CLASS;
