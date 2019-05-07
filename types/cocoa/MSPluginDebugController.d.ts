/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginDebugController<T0 = void, T1 = void, T2 = void> extends NSObject, CODebugControllerProtocol {}
  namespace MSPluginDebugController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, CODebugControllerProtocol {
      alloc<R = MSPluginDebugController>(): R;
      new: <R = MSPluginDebugController>() => R;
    }
  }
}

declare const MSPluginDebugController: cocoa.MSPluginDebugController.CLASS;
