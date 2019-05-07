/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientEventHandler<T0 = void, T1 = void, T2 = void> extends MSPointsEventHandler, MSGradientPointArrayDelegateProtocol {
    setValue_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKeyPath: P1): R;
    cursorWithDrawingBlock<R = unknown, P0 = CDUnknownBlockType>(_cursorWithDrawingBlock: P0): R;
    shouldDisplayMessageForSelectedStop<R = boolean>(): R;
    previousStop<R = unknown>(): R;
    nextStop<R = unknown>(): R;
    selectedStop<R = unknown>(): R;
    centerStopBetween<R = void>(): R;
    setSelectedStopToPercentage<R = void, P0 = number>(_setSelectedStopToPercentage: P0): R;
    setIndexForSelectedPoint<R = void, P0 = number>(_setIndexForSelectedPoint: P0): R;
    hasSelectedPoint<R = boolean>(): R;
    canInsertPointAtMouse<R = boolean, P0 = CGPoint>(_canInsertPointAtMouse: P0): R;
    addStopAtPosition<R = number, P0 = CGPoint>(_addStopAtPosition: P0): R;
    repairGradientIfNecessary<R = void>(): R;
    colorMagnifierAction<R = void, P0 = unknown>(_colorMagnifierAction: P0): R;
    gradient<R = unknown>(): R;
    insertPointCursor<R = NSCursor>(): R;
    setInsertPointCursor<R = void, P0 = NSCursor>(_v: P0): R;
    selectPointCursor<R = NSCursor>(): R;
    setSelectPointCursor<R = void, P0 = NSCursor>(_v: P0): R;
    gradientDelegate<R = MSGradientEventHandlerDelegate>(): R;
    setGradientDelegate<R = void, P0 = MSGradientEventHandlerDelegate>(_v: P0): R;
    stylePart<R = MSStyleBasicFill>(): R;
    setStylePart<R = void, P0 = MSStyleBasicFill>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSGradientEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPointsEventHandler, MSGradientPointArrayDelegateProtocol {
      alloc<R = MSGradientEventHandler>(): R;
      new: <R = MSGradientEventHandler>() => R;
      gradientHandlerForStylePart_manager<R = unknown, P0 = unknown, P1 = unknown>(_gradientHandlerForStylePart: P0, _manager: P1): R;
    }
  }
}

declare const MSGradientEventHandler: cocoa.MSGradientEventHandler.CLASS;
