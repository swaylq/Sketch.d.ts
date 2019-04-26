/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSItemProviderTypeCoercion<T0 = void, T1 = void, T2 = void> extends NSObject {
    _NSItemProviderTypeCoercion_coercedNSDataValueFromNSImageValue_error<R = unknown, P0 = unknown, P1 = unknown>(__NSItemProviderTypeCoercion_coercedNSDataValueFromNSImageValue: P0, _error: P1): R;
    _NSItemProviderTypeCoercion_coercedNSImageValueFromNSDataValue_error<R = unknown, P0 = unknown, P1 = unknown>(__NSItemProviderTypeCoercion_coercedNSImageValueFromNSDataValue: P0, _error: P1): R;
    _NSItemProviderTypeCoercion_coercedNSFileWrapperValueFromNSDataValue_error<R = unknown, P0 = unknown, P1 = unknown>(__NSItemProviderTypeCoercion_coercedNSFileWrapperValueFromNSDataValue: P0, _error: P1): R;
    _NSItemProviderTypeCoercion_coercedNSFileWrapperValueFromNSURLValue_error<R = unknown, P0 = unknown, P1 = unknown>(__NSItemProviderTypeCoercion_coercedNSFileWrapperValueFromNSURLValue: P0, _error: P1): R;
    _NSItemProviderTypeCoercion_coercedNSDataValueFromNSURLValue_error<R = unknown, P0 = unknown, P1 = unknown>(__NSItemProviderTypeCoercion_coercedNSDataValueFromNSURLValue: P0, _error: P1): R;
    coerceValueError<R = unknown, P0 = unknown>(_coerceValueError: P0): R;
    shouldCoerceForCoding<R = boolean>(): R;
    dealloc<R = void>(): R;
    targetClass<R = unknown>(): R;
    setTargetClass<R = void, P0 = unknown>(_v: P0): R;
    value<R = unknown>(): R;
    setValue<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace _NSItemProviderTypeCoercion {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSItemProviderTypeCoercion>(): R;
      new: <R = _NSItemProviderTypeCoercion>() => R;
      typeCoercionForValue_targetClass<R = unknown, P0 = unknown, P1 = unknown>(_typeCoercionForValue: P0, _targetClass: P1): R;
    }
  }
}
