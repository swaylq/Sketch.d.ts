/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIBucket<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    isMenuBar<R = boolean>(): R;
    isGlobal<R = boolean>(): R;
    setPublicProperty_forKey<R = void, P0 = unknown, P1 = unknown>(_setPublicProperty: P0, _forKey: P1): R;
    encodeInvalidPersistentStateWithBackgroundQueue_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_encodeInvalidPersistentStateWithBackgroundQueue: P0, _completionHandler: P1): R;
    _invalidateRestorableStateOfContents<R = void>(): R;
    _contentsHaveInvalidRestorableState<R = boolean>(): R;
    _setContentsHaveInvalidRestorableState<R = void, P0 = boolean>(__setContentsHaveInvalidRestorableState: P0): R;
    initWithWindowID<R = unknown, P0 = number>(_initWithWindowID: P0): R;
    _shouldRecordPersistentState<R = boolean>(): R;
    _persistentUIWindowID<R = number>(): R;
    frameString<R = NSString>(): R;
    setFrameString<R = void, P0 = NSString>(_v: P0): R;
    state<R = NSMutableDictionary>(): R;
  }
  namespace NSPersistentUIBucket {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPersistentUIBucket>(): R;
      new: <R = NSPersistentUIBucket>() => R;
    }
  }
}

declare const NSPersistentUIBucket: cocoa.NSPersistentUIBucket.CLASS;
