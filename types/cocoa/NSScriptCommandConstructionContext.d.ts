/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptCommandConstructionContext<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSScriptCommandConstructionContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptCommandConstructionContext>(): R;
      new: <R = NSScriptCommandConstructionContext>() => R;
      currentConstructionContext<R = unknown>(): R;
      setCurrentConstructionContext<R = void, P0 = unknown>(_setCurrentConstructionContext: P0): R;
      endConstruction<R = void>(): R;
      beginConstructionWithSuiteRegistry<R = void, P0 = unknown>(_beginConstructionWithSuiteRegistry: P0): R;
    }
  }
}

declare const NSScriptCommandConstructionContext: cocoa.NSScriptCommandConstructionContext.CLASS;
