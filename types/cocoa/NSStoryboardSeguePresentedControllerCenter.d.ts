/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardSeguePresentedControllerCenter<T0 = void, T1 = void, T2 = void> extends NSObject {
    controllerWithIdentifier<R = unknown, P0 = unknown>(_controllerWithIdentifier: P0): R;
    unregisterControllerWithOptions<R = void, P0 = unknown>(_unregisterControllerWithOptions: P0): R;
    registerController_withOptions<R = void, P0 = unknown, P1 = unknown>(_registerController: P0, _withOptions: P1): R;
    dealloc<R = void>(): R;
    registeredControllers<R = NSMapTable>(): R;
    setRegisteredControllers<R = void, P0 = NSMapTable>(_v: P0): R;
  }
  namespace NSStoryboardSeguePresentedControllerCenter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSStoryboardSeguePresentedControllerCenter>(): R;
      new: <R = NSStoryboardSeguePresentedControllerCenter>() => R;
      defaultCenter<R = unknown>(): R;
    }
  }
}

declare const NSStoryboardSeguePresentedControllerCenter: cocoa.NSStoryboardSeguePresentedControllerCenter.CLASS;
