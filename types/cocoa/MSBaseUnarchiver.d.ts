/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseUnarchiver<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    instanciateObject<R = unknown, P0 = unknown>(_instanciateObject: P0): R;
    decodeSizeForKey_withDefault<R = CGSize, P0 = unknown, P1 = CGSize>(_decodeSizeForKey: P0, _withDefault: P1): R;
    decodeIntegerForKey_withDefault<R = number, P0 = unknown, P1 = number>(_decodeIntegerForKey: P0, _withDefault: P1): R;
    decodePointForKey_withDefault<R = CGPoint, P0 = unknown, P1 = CGPoint>(_decodePointForKey: P0, _withDefault: P1): R;
    decodeRectForKey_withDefault<R = CGRect, P0 = unknown, P1 = CGRect>(_decodeRectForKey: P0, _withDefault: P1): R;
    decodeBoolForKey_withDefault<R = boolean, P0 = unknown, P1 = boolean>(_decodeBoolForKey: P0, _withDefault: P1): R;
    decodeDoubleForKey_withDefault<R = number, P0 = unknown, P1 = number>(_decodeDoubleForKey: P0, _withDefault: P1): R;
    decodeObjectForKey<R = unknown, P0 = unknown>(_decodeObjectForKey: P0): R;
    containsValueForKey<R = boolean, P0 = unknown>(_containsValueForKey: P0): R;
    decodeObjectOfClasses_forKey<R = unknown, P0 = unknown, P1 = unknown>(_decodeObjectOfClasses: P0, _forKey: P1): R;
    decodeObjectOfClass_forKey<R = unknown, P0 = unknown, P1 = unknown>(_decodeObjectOfClass: P0, _forKey: P1): R;
    unarchiveObjectAsVersion_corruptionDetected_error<R = unknown, P0 = number, P1 = string, P2 = unknown>(_unarchiveObjectAsVersion: P0, _corruptionDetected: P1, _error: P2): R;
    decodeRoot<R = unknown>(): R;
    initForReadingWithData<R = unknown, P0 = unknown>(_initForReadingWithData: P0): R;
    currentObject<R = unknown>(): R;
    setCurrentObject<R = void, P0 = unknown>(_v: P0): R;
    decodedObjectStack<R = NSPointerArray>(): R;
    setDecodedObjectStack<R = void, P0 = NSPointerArray>(_v: P0): R;
    actualSymbolIDs<R = NSArray>(): R;
    setActualSymbolIDs<R = void, P0 = NSArray>(_v: P0): R;
    corruptionDetected<R = boolean>(): R;
    setCorruptionDetected<R = void, P0 = boolean>(_v: P0): R;
    archiveVersion<R = number>(): R;
    setArchiveVersion<R = void, P0 = number>(_v: P0): R;
    currentVersion<R = number>(): R;
    setCurrentVersion<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSBaseUnarchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBaseUnarchiver>(): R;
      new: <R = MSBaseUnarchiver>() => R;
      unarchiveObjectWithData_asVersion_corruptionDetected_error<R = unknown, P0 = unknown, P1 = number, P2 = string, P3 = unknown>(_unarchiveObjectWithData: P0, _asVersion: P1, _corruptionDetected: P2, _error: P3): R;
      unarchiveObjectWithData_actualVersion_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_unarchiveObjectWithData: P0, _actualVersion: P1, _error: P2): R;
      unarchiveObjectWithData<R = unknown, P0 = unknown>(_unarchiveObjectWithData: P0): R;
    }
  }
}

declare const MSBaseUnarchiver: cocoa.MSBaseUnarchiver.CLASS;
