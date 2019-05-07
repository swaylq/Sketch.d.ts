/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSEditorBinderPluginProtocol<T0 = void, T1 = void, T2 = void> extends _NSBinderPluginProtocol {
    conditionalBehaviorOffByDefault<R = boolean, P0 = unknown>(_conditionalBehaviorOffByDefault: P0): R;
    prefersEnabledOverEditable<R = boolean, P0 = unknown>(_prefersEnabledOverEditable: P0): R;
  }
  namespace _NSEditorBinderPluginProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBinderPluginProtocol {}
  }
}
