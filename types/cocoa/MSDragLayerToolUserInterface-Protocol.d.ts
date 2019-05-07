/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragLayerToolUserInterfaceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    setUndoActionName<R = void, P0 = NSString>(_setUndoActionName: P0): R;
    selectLayers<R = void, P0 = NSArray>(_selectLayers: P0): R;
  }
  namespace MSDragLayerToolUserInterfaceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
