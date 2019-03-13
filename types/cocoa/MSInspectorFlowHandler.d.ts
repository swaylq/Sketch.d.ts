/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorFlowHandler<T = any> extends NSObject, MSFlowMenuBuilderTargetProtocol {
    cxx_destruct<R = void>(): R;
    layers<R = unknown>(): R;
    document<R = unknown>(): R;
    reload<R = void>(): R;
    flowConnection<R = unknown>(): R;
    enumerateLayersAndReload<R = void, P0 = CDUnknownBlockType>(_enumerateLayersAndReload: P0): R;
    delegate<R = MSInspectorFlowHandlerDelegate>(): R;
    setDelegate<R = void, P0 = MSInspectorFlowHandlerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSInspectorFlowHandler<T = any> extends NSObject, MSFlowMenuBuilderTargetProtocol {
      alloc<R = MSInspectorFlowHandler>(): R;
      new: <R = MSInspectorFlowHandler>() => R;
      shouldShowFullInspectorForLayers<R = boolean, P0 = unknown>(_shouldShowFullInspectorForLayers: P0): R;
      shouldShowFullInspectorForFlow<R = boolean, P0 = unknown>(_shouldShowFullInspectorForFlow: P0): R;
      flowConnectionForLayers<R = unknown, P0 = unknown>(_flowConnectionForLayers: P0): R;
    }
  }
}

declare const MSInspectorFlowHandler: cocoa.classes.MSInspectorFlowHandler;