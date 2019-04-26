/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIWindowRestoration<T0 = void, T1 = void, T2 = void> extends NSObject, NSKeyedUnarchiverDelegateProtocol {
    dealloc<R = void>(): R;
    unpinRestoredWindowFromTalagentWindow<R = void>(): R;
    pinRestoredWindowToTalagentWindow<R = void>(): R;
    disposeTalagentWindowIfUnused<R = void>(): R;
    acquireTalagentWindow<R = number>(): R;
    talagentWindow<R = number>(): R;
    closeWindowCoder<R = void>(): R;
    windowCoder<R = unknown>(): R;
    isFinishedRestoring<R = boolean>(): R;
    isGlobal<R = boolean>(): R;
    finishRestoringWithWindow<R = void, P0 = unknown>(_finishRestoringWithWindow: P0): R;
    recordForPersistentID<R = unknown, P0 = unknown>(_recordForPersistentID: P0): R;
    setRecord_forPersistentID<R = void, P0 = unknown, P1 = unknown>(_setRecord: P0, _forPersistentID: P1): R;
    initWithWindowID<R = unknown, P0 = number>(_initWithWindowID: P0): R;
    lastMinuteWindowData<R = NSData>(): R;
    setLastMinuteWindowData<R = void, P0 = NSData>(_v: P0): R;
    restoredWindow<R = NSWindow>(): R;
    talagentWindowDictionary<R = NSDictionary>(): R;
    setTalagentWindowDictionary<R = void, P0 = NSDictionary>(_v: P0): R;
    windowID<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSPersistentUIWindowRestoration {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSKeyedUnarchiverDelegateProtocol {
      alloc<R = NSPersistentUIWindowRestoration>(): R;
      new: <R = NSPersistentUIWindowRestoration>() => R;
      bulkDisposeTalagentWindowsIfUnused_withFade<R = void, P0 = unknown, P1 = boolean>(_bulkDisposeTalagentWindowsIfUnused: P0, _withFade: P1): R;
    }
  }
}

declare const NSPersistentUIWindowRestoration: cocoa.NSPersistentUIWindowRestoration.CLASS;
