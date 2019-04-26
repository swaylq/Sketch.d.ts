/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServiceMaster<T0 = void, T1 = void, T2 = void> extends NSObject, NSServiceMasterProtoProtocol {
    objectForServicePath_app_doLaunch_limitDate<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(_objectForServicePath: P0, _app: P1, _doLaunch: P2, _limitDate: P3): R;
    objectForServicePath_app_doLaunch_limitDate_basePortName<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown, P4 = unknown>(_objectForServicePath: P0, _app: P1, _doLaunch: P2, _limitDate: P3, _basePortName: P4): R;
    serviceListener<R = unknown>(): R;
    unregisterObjectWithServicePath<R = void, P0 = unknown>(_unregisterObjectWithServicePath: P0): R;
    registerObject_withServicePath<R = void, P0 = unknown, P1 = unknown>(_registerObject: P0, _withServicePath: P1): R;
    dealloc<R = void>(): R;
  }
  namespace NSServiceMaster {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSServiceMasterProtoProtocol {
      alloc<R = NSServiceMaster>(): R;
      new: <R = NSServiceMaster>() => R;
      internalRunService_pboard_flags_cancelledHint<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = string>(_internalRunService: P0, _pboard: P1, _flags: P2, _cancelledHint: P3): R;
      copyServiceForUUID<R = unknown, P0 = unknown>(_copyServiceForUUID: P0): R;
      copyServiceForAppIdentifier_messageName<R = unknown, P0 = unknown, P1 = unknown>(_copyServiceForAppIdentifier: P0, _messageName: P1): R;
      sharedServiceMaster<R = unknown>(): R;
    }
  }
}

declare const NSServiceMaster: cocoa.NSServiceMaster.CLASS;
