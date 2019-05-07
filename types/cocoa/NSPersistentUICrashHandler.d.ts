/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUICrashHandler<T0 = void, T1 = void, T2 = void> extends NSObject {
    crashBlameCounter<R = number>(): R;
    clearCrashCountFileIfNecessary<R = void>(): R;
    inspectCrashDataWithModification_handler<R = void, P0 = boolean, P1 = CDUnknownBlockType>(_inspectCrashDataWithModification: P0, _handler: P1): R;
    modifyCrashBlameCounterBy<R = number, P0 = number>(_modifyCrashBlameCounterBy: P0): R;
    dealloc<R = void>(): R;
    initWithRestorationCountFileURL<R = unknown, P0 = unknown>(_initWithRestorationCountFileURL: P0): R;
  }
  namespace NSPersistentUICrashHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPersistentUICrashHandler>(): R;
      new: <R = NSPersistentUICrashHandler>() => R;
    }
  }
}

declare const NSPersistentUICrashHandler: cocoa.NSPersistentUICrashHandler.CLASS;
