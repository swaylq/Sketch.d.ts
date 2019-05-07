/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTableViewManagerDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    parentViewControllerForTableViewManager<R = NSViewController, P0 = MSInspectorTableViewManager>(_parentViewControllerForTableViewManager: P0): R;
    sectionsForTableViewManager<R = NSArray, P0 = MSInspectorTableViewManager>(_sectionsForTableViewManager: P0): R;
  }
  namespace MSInspectorTableViewManagerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
