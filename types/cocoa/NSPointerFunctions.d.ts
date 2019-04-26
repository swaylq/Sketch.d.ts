/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPointerFunctions<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    initWithOptions<R = unknown, P0 = number>(_initWithOptions: P0): R;
    usesWeakReadAndWriteBarriers<R = boolean>(): R;
    setUsesWeakReadAndWriteBarriers<R = void, P0 = boolean>(_v: P0): R;
    usesStrongWriteBarrier<R = boolean>(): R;
    setUsesStrongWriteBarrier<R = void, P0 = boolean>(_v: P0): R;
    relinquishFunction<R = CDUnknownFunctionPointerType>(): R;
    setRelinquishFunction<R = void, P0 = CDUnknownFunctionPointerType>(_v: P0): R;
    acquireFunction<R = CDUnknownFunctionPointerType>(): R;
    setAcquireFunction<R = void, P0 = CDUnknownFunctionPointerType>(_v: P0): R;
    descriptionFunction<R = CDUnknownFunctionPointerType>(): R;
    setDescriptionFunction<R = void, P0 = CDUnknownFunctionPointerType>(_v: P0): R;
    isEqualFunction<R = CDUnknownFunctionPointerType>(): R;
    setIsEqualFunction<R = void, P0 = CDUnknownFunctionPointerType>(_v: P0): R;
    hashFunction<R = CDUnknownFunctionPointerType>(): R;
    setHashFunction<R = void, P0 = CDUnknownFunctionPointerType>(_v: P0): R;
    sizeFunction<R = CDUnknownFunctionPointerType>(): R;
    setSizeFunction<R = void, P0 = CDUnknownFunctionPointerType>(_v: P0): R;
  }
  namespace NSPointerFunctions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSPointerFunctions>(): R;
      new: <R = NSPointerFunctions>() => R;
      pointerFunctionsWithOptions<R = unknown, P0 = number>(_pointerFunctionsWithOptions: P0): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSPointerFunctions: cocoa.NSPointerFunctions.CLASS;
