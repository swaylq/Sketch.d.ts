/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyedUnarchiver<T0 = void, T1 = void, T2 = void> extends NSCoder {
    _containsNextUnkeyedObject<R = boolean>(): R;
    _currentUniqueIdentifier<R = number>(): R;
    _decodePropertyListForKey<R = unknown, P0 = unknown>(__decodePropertyListForKey: P0): R;
    _decodeArrayOfObjectsForKey<R = unknown, P0 = unknown>(__decodeArrayOfObjectsForKey: P0): R;
    _validatePropertyListClass_forKey<R = boolean, P0 = unknown, P1 = unknown>(__validatePropertyListClass: P0, _forKey: P1): R;
    _replaceObject_withObject<R = void, P0 = unknown, P1 = unknown>(__replaceObject: P0, _withObject: P1): R;
    replaceObject_withObject<R = void, P0 = unknown, P1 = unknown>(_replaceObject: P0, _withObject: P1): R;
    _temporaryMapReplaceObject_withObject<R = void, P0 = unknown, P1 = unknown>(__temporaryMapReplaceObject: P0, _withObject: P1): R;
    finishDecoding<R = void>(): R;
    _setAllowedClassNames<R = void, P0 = unknown>(__setAllowedClassNames: P0): R;
    _allowedClassNames<R = unknown>(): R;
    classForClassName<R = unknown, P0 = unknown>(_classForClassName: P0): R;
    setClass_forClassName<R = void, P0 = unknown, P1 = unknown>(_setClass: P0, _forClassName: P1): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithStream<R = unknown, P0 = unknown>(_initWithStream: P0): R;
    initForReadingWithData<R = unknown, P0 = unknown>(_initForReadingWithData: P0): R;
    initForReadingFromData_error<R = unknown, P0 = unknown, P1 = unknown>(_initForReadingFromData: P0, _error: P1): R;
    _initForReadingFromData_error_throwLegacyExceptions<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(__initForReadingFromData: P0, _error: P1, _throwLegacyExceptions: P2): R;
    _initWithStream_data_topDict<R = unknown, P0 = __CFReadStream, P1 = unknown, P2 = __CFDictionary>(__initWithStream: P0, _data: P1, _topDict: P2): R;
    _blobForCurrentObject<R = unknown>(): R;
    decodingFailurePolicy<R = number>(): R;
    setDecodingFailurePolicy<R = void, P0 = number>(_v: P0): R;
    requiresSecureCoding<R = boolean>(): R;
    setRequiresSecureCoding<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = NSKeyedUnarchiverDelegate>(): R;
    setDelegate<R = void, P0 = NSKeyedUnarchiverDelegate>(_v: P0): R;
  }
  namespace NSKeyedUnarchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCoder {
      alloc<R = NSKeyedUnarchiver>(): R;
      new: <R = NSKeyedUnarchiver>() => R;
      unarchiveTopLevelObjectWithData_error<R = unknown, P0 = unknown, P1 = unknown>(_unarchiveTopLevelObjectWithData: P0, _error: P1): R;
      unarchiveObjectWithData_error<R = unknown, P0 = unknown, P1 = unknown>(_unarchiveObjectWithData: P0, _error: P1): R;
      unarchiveObjectWithData<R = unknown, P0 = unknown>(_unarchiveObjectWithData: P0): R;
      unarchiveObjectWithFile<R = unknown, P0 = unknown>(_unarchiveObjectWithFile: P0): R;
      unarchivedObjectOfClasses_fromData_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_unarchivedObjectOfClasses: P0, _fromData: P1, _error: P2): R;
      unarchivedObjectOfClass_fromData_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_unarchivedObjectOfClass: P0, _fromData: P1, _error: P2): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSKeyedUnarchiver: cocoa.NSKeyedUnarchiver.CLASS;
