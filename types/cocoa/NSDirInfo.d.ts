/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirInfo<T0 = void, T1 = void, T2 = void> extends NSMutableDictionary {
    serializeToData<R = unknown>(): R;
    writePath_docInfo_errorHandler_remapContents_hardLinkPath<R = number, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = unknown>(_writePath: P0, _docInfo: P1, _errorHandler: P2, _remapContents: P3, _hardLinkPath: P4): R;
    removeObjectForKey<R = void, P0 = unknown>(_removeObjectForKey: P0): R;
    setObject_forKey<R = void, P0 = unknown, P1 = unknown>(_setObject: P0, _forKey: P1): R;
    keyEnumerator<R = unknown>(): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    initWithContentsOfFile<R = unknown, P0 = unknown>(_initWithContentsOfFile: P0): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    initWithDictionary_copyItems<R = unknown, P0 = unknown, P1 = boolean>(_initWithDictionary: P0, _copyItems: P1): R;
    initWithObjects_forKeys_count<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithObjects: P0, _forKeys: P1, _count: P2): R;
    init<R = unknown>(): R;
  }
  namespace NSDirInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableDictionary {}
  }
}

declare const NSDirInfo: cocoa.NSDirInfo.CLASS;
