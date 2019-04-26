/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuCustomCarbonEventHandler<T0 = void, T1 = void, T2 = void> extends NSObject {
    uninstallAll<R = void>(): R;
    installAllIntoMenuRef<R = void, P0 = OpaqueMenuRef>(_installAllIntoMenuRef: P0): R;
    uninstall<R = void>(): R;
    installIntoMenuRef<R = void, P0 = OpaqueMenuRef>(_installIntoMenuRef: P0): R;
    initWithEventSpecs_count_handler<R = unknown, P0 = EventTypeSpec, P1 = number, P2 = CDUnknownBlockType>(_initWithEventSpecs: P0, _count: P1, _handler: P2): R;
    dealloc<R = void>(): R;
  }
  namespace NSMenuCustomCarbonEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSMenuCustomCarbonEventHandler>(): R;
      new: <R = NSMenuCustomCarbonEventHandler>() => R;
    }
  }
}

declare const NSMenuCustomCarbonEventHandler: cocoa.NSMenuCustomCarbonEventHandler.CLASS;
