/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewDataControllerDataSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    rootObject<R = unknown>(): R;
    dataController_childrenOfNode<R = NSArray, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _childrenOfNode: P1): R;
  }
  namespace BCOutlineViewDataControllerDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
