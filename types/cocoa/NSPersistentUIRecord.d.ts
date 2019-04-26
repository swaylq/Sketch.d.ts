/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIRecord<T0 = void, T1 = void, T2 = void> extends NSObject {
    _setSecurityScopedBookmarks<R = void, P0 = unknown>(__setSecurityScopedBookmarks: P0): R;
    addSecurityScopedBookmarks<R = void, P0 = unknown>(_addSecurityScopedBookmarks: P0): R;
    openedPushStateUnarchivers<R = unknown>(): R;
    keyPathStateForKey_value<R = boolean, P0 = unknown, P1 = unknown>(_keyPathStateForKey: P0, _value: P1): R;
    setEncodedKeyedState_forKey_type<R = void, P0 = unknown, P1 = unknown, P2 = number>(_setEncodedKeyedState: P0, _forKey: P1, _type: P2): R;
    _keyedStateForKey<R = unknown, P0 = unknown>(__keyedStateForKey: P0): R;
    _addKeyedState<R = void, P0 = unknown>(__addKeyedState: P0): R;
    _setKeyedState<R = void, P0 = unknown>(__setKeyedState: P0): R;
    setEncodedKeyedState_forKey<R = void, P0 = unknown, P1 = unknown>(_setEncodedKeyedState: P0, _forKey: P1): R;
    keyedState<R = unknown>(): R;
    generateArchive<R = void, P0 = CDUnknownBlockType>(_generateArchive: P0): R;
    compare<R = number, P0 = unknown>(_compare: P0): R;
    copyStateDecoder<R = unknown>(): R;
    mergeFromRecord<R = void, P0 = unknown>(_mergeFromRecord: P0): R;
    parsePayloadFromData_length<R = boolean, P0 = void, P1 = number>(_parsePayloadFromData: P0, _length: P1): R;
    copyData<R = __CFData>(): R;
    setEncryptionKey<R = void, P0 = number>(_setEncryptionKey: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    isGlobal<R = boolean>(): R;
    initForDecoding<R = unknown>(): R;
    initForEncodingWithIdentifier_windowID<R = unknown, P0 = unknown, P1 = number>(_initForEncodingWithIdentifier: P0, _windowID: P1): R;
    isFromLSFileListEra<R = boolean>(): R;
    isCarbonWindow<R = boolean>(): R;
    setIsCarbonWindow<R = void, P0 = boolean>(_v: P0): R;
    windowID<R = number>(): R;
    persistentID<R = NSString>(): R;
    archivedState<R = NSData>(): R;
    setArchivedState<R = void, P0 = NSData>(_v: P0): R;
    securityScopedBookmarks<R = NSArray>(): R;
  }
  namespace NSPersistentUIRecord {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPersistentUIRecord>(): R;
      new: <R = NSPersistentUIRecord>() => R;
      coalesceRecords<R = void, P0 = unknown>(_coalesceRecords: P0): R;
      parseOneRecordFromReadBlock_withDecryptionKeys<R = unknown, P0 = CDUnknownBlockType, P1 = unknown>(_parseOneRecordFromReadBlock: P0, _withDecryptionKeys: P1): R;
    }
  }
}

declare const NSPersistentUIRecord: cocoa.NSPersistentUIRecord.CLASS;
