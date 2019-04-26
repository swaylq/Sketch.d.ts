/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptCoercionHandler<T0 = void, T1 = void, T2 = void> extends NSObject {
    registerCoercer_selector_toConvertFromClass_toClass<R = void, P0 = unknown, P1 = string, P2 = unknown, P3 = unknown>(_registerCoercer: P0, _selector: P1, _toConvertFromClass: P2, _toClass: P3): R;
    coerceValue_toClass<R = unknown, P0 = unknown, P1 = unknown>(_coerceValue: P0, _toClass: P1): R;
    _findCoercerFromClass_toClass<R = unknown, P0 = unknown, P1 = unknown>(__findCoercerFromClass: P0, _toClass: P1): R;
    dealloc<R = void>(): R;
    _setUpFoundationCoercions<R = void>(): R;
    // + NSScriptCoercionHandler(NSAppKitCoercions): 
    _setUpAppKitCoercions<R = void>(): R;
  }
  namespace NSScriptCoercionHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptCoercionHandler>(): R;
      new: <R = NSScriptCoercionHandler>() => R;
      sharedCoercionHandler<R = unknown>(): R;
      // + NSScriptCoercionHandler(NSAppKitCoercions): 
      coerceTextStorage_toData<R = unknown, P0 = unknown, P1 = unknown>(_coerceTextStorage: P0, _toData: P1): R;
      coerceData_toTextStorage<R = unknown, P0 = unknown, P1 = unknown>(_coerceData: P0, _toTextStorage: P1): R;
      coerceTextStorage_toString<R = unknown, P0 = unknown, P1 = unknown>(_coerceTextStorage: P0, _toString: P1): R;
      coerceString_toTextStorage<R = unknown, P0 = unknown, P1 = unknown>(_coerceString: P0, _toTextStorage: P1): R;
      coerceColor_toData<R = unknown, P0 = unknown, P1 = unknown>(_coerceColor: P0, _toData: P1): R;
      coerceData_toColor<R = unknown, P0 = unknown, P1 = unknown>(_coerceData: P0, _toColor: P1): R;
      coerceColor_toArray<R = unknown, P0 = unknown, P1 = unknown>(_coerceColor: P0, _toArray: P1): R;
      coerceArray_toColor<R = unknown, P0 = unknown, P1 = unknown>(_coerceArray: P0, _toColor: P1): R;
      coerceColor_toString<R = unknown, P0 = unknown, P1 = unknown>(_coerceColor: P0, _toString: P1): R;
      coerceString_toColor<R = unknown, P0 = unknown, P1 = unknown>(_coerceString: P0, _toColor: P1): R;
    }
  }
}

declare const NSScriptCoercionHandler: cocoa.NSScriptCoercionHandler.CLASS;
