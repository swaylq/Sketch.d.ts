/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectInstanceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    syncWithTemplateInstance<R = void, P0 = MSSharedObjectInstance>(_syncWithTemplateInstance: P0): R;
    type<R = number>(): R;
  }
  namespace MSSharedObjectInstanceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
