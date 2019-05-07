/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowEventHandler<T0 = void, T1 = void, T2 = void> extends MSEventHandler, MSFlowMenuBuilderTargetProtocol {
    findTargetLayerForMouse<R = unknown, P0 = CGPoint>(_findTargetLayerForMouse: P0): R;
    positionOfOtherPageImageIndicatorForArtboard<R = CGPoint, P0 = unknown>(_positionOfOtherPageImageIndicatorForArtboard: P0): R;
    parentArtboards<R = unknown>(): R;
    showOtherPageMenuForLayer<R = void, P0 = unknown>(_showOtherPageMenuForLayer: P0): R;
    attachWireToTarget<R = void>(): R;
    moveWireToMouse<R = void, P0 = CGPoint>(_moveWireToMouse: P0): R;
    drawAreaIndicatorsWithImage_atOffset_atEdge_excludingArtboardsWithFlowType<R = void, P0 = unknown, P1 = number, P2 = number, P3 = number>(_drawAreaIndicatorsWithImage: P0, _atOffset: P1, _atEdge: P2, _excludingArtboardsWithFlowType: P3): R;
    drawOtherPageAreaIndicator<R = void>(): R;
    drawBackAreaIndicator<R = void>(): R;
    flowItemForFlowInfo_fromLayer<R = unknown, P0 = MSFlowInfo, P1 = unknown>(_flowItemForFlowInfo: P0, _fromLayer: P1): R;
    flowItemsForConnectionToMouse<R = unknown>(): R;
    flowItemsForConnectionToArtboard<R = unknown>(): R;
    drawConnectionToArtboardInContext<R = void, P0 = unknown>(_drawConnectionToArtboardInContext: P0): R;
    flowItemsForConnectionToOtherPage<R = unknown>(): R;
    flowItemsForConnectionToBackArrows<R = unknown>(): R;
    findMouseAndDisconnectFromTarget<R = void>(): R;
    didDragMouse<R = boolean>(): R;
    setDidDragMouse<R = void, P0 = boolean>(_v: P0): R;
    lastMouse<R = CGPoint>(): R;
    setLastMouse<R = void, P0 = CGPoint>(_v: P0): R;
    targetArtboard<R = MSArtboardGroup>(): R;
    setTargetArtboard<R = void, P0 = MSArtboardGroup>(_v: P0): R;
    hoverType<R = number>(): R;
    setHoverType<R = void, P0 = number>(_v: P0): R;
    layers<R = MSLayerArray>(): R;
    setLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
    flowItems<R = NSSet>(): R;
  }
  namespace MSFlowEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandler, MSFlowMenuBuilderTargetProtocol {
      alloc<R = MSFlowEventHandler>(): R;
      new: <R = MSFlowEventHandler>() => R;
    }
  }
}

declare const MSFlowEventHandler: cocoa.MSFlowEventHandler.CLASS;
