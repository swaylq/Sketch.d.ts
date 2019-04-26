/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuUserDefaultController<T0 = void, T1 = void, T2 = void> extends NSObject, NSUserInterfaceValidationsProtocol {
    createNewMenuItem<R = unknown>(): R;
    _toggleDefault<R = void, P0 = unknown>(__toggleDefault: P0): R;
    currentBoolValue<R = boolean>(): R;
    dealloc<R = void>(): R;
    initWithName_defaultValue_dynamicGetter_dynamicSetter<R = unknown, P0 = unknown, P1 = boolean, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_initWithName: P0, _defaultValue: P1, _dynamicGetter: P2, _dynamicSetter: P3): R;
    defaultName<R = NSString>(): R;
  }
  namespace NSDebugMenuUserDefaultController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSUserInterfaceValidationsProtocol {
      alloc<R = NSDebugMenuUserDefaultController>(): R;
      new: <R = NSDebugMenuUserDefaultController>() => R;
      controllerForDefaultWithName_dynamicGetter_dynamicSetter<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_controllerForDefaultWithName: P0, _dynamicGetter: P1, _dynamicSetter: P2): R;
      controllerForDefaultWithName_defaultValue_dynamicGetter_dynamicSetter<R = unknown, P0 = unknown, P1 = boolean, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_controllerForDefaultWithName: P0, _defaultValue: P1, _dynamicGetter: P2, _dynamicSetter: P3): R;
    }
  }
}

declare const NSDebugMenuUserDefaultController: cocoa.NSDebugMenuUserDefaultController.CLASS;
