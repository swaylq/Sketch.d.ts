/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAppKitARCSafeWeakReference<T0 = void, T1 = void, T2 = void> extends NSObject {
    isUnsafeUnretained<R = boolean>(): R;
    set<R = void, P0 = unknown>(_set: P0): R;
    getUnretained<R = unknown>(): R;
    get<R = unknown>(): R;
    getRetained<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSAppKitARCSafeWeakReference {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSAppKitARCSafeWeakReference>(): R;
      new: <R = _NSAppKitARCSafeWeakReference>() => R;
      safeWeaklyLoadUnretainedValueFrom_helperObject<R = unknown, P0 = unknown, P1 = unknown>(_safeWeaklyLoadUnretainedValueFrom: P0, _helperObject: P1): R;
      storeNilSafeWeaklyInto_helperObject<R = void, P0 = unknown, P1 = unknown>(_storeNilSafeWeaklyInto: P0, _helperObject: P1): R;
      storeValue_safeWeaklyInto_helperObject<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_storeValue: P0, _safeWeaklyInto: P1, _helperObject: P2): R;
      safeWeaklyLoadUnretainedValueFrom_helperFlag<R = unknown, P0 = unknown, P1 = boolean>(_safeWeaklyLoadUnretainedValueFrom: P0, _helperFlag: P1): R;
      safeWeaklyLoadAutoreleasedValueFrom_helperFlag<R = unknown, P0 = unknown, P1 = boolean>(_safeWeaklyLoadAutoreleasedValueFrom: P0, _helperFlag: P1): R;
      safeWeaklyLoadRetainedValueFrom_helperFlag<R = unknown, P0 = unknown, P1 = boolean>(_safeWeaklyLoadRetainedValueFrom: P0, _helperFlag: P1): R;
      storeNilSafeWeaklyInto_helperFlag<R = void, P0 = unknown, P1 = boolean>(_storeNilSafeWeaklyInto: P0, _helperFlag: P1): R;
      storeValue_safeWeaklyInto_helperFlag<R = boolean, P0 = unknown, P1 = unknown, P2 = boolean>(_storeValue: P0, _safeWeaklyInto: P1, _helperFlag: P2): R;
    }
  }
}
