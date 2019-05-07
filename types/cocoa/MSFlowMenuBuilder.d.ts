/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowMenuBuilder<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSFlowMenuBuilder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFlowMenuBuilder>(): R;
      new: <R = MSFlowMenuBuilder>() => R;
      menuItemsForArtboards_currentDestination_target<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_menuItemsForArtboards: P0, _currentDestination: P1, _target: P2): R;
      menuItemsForPages_currentDestination_target<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_menuItemsForPages: P0, _currentDestination: P1, _target: P2): R;
      menuForPages_target<R = unknown, P0 = unknown, P1 = unknown>(_menuForPages: P0, _target: P1): R;
      createFlowDestinationMenuButton_document_destination_target<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_createFlowDestinationMenuButton: P0, _document: P1, _destination: P2, _target: P3): R;
    }
  }
}

declare const MSFlowMenuBuilder: cocoa.MSFlowMenuBuilder.CLASS;
